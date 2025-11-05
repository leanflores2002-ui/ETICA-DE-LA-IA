## ---------- Stage 1: Build frontend (React) ----------
# syntax=docker/dockerfile:1.4

FROM node:20-bookworm-slim AS frontend-builder
WORKDIR /frontend

# Copiamos solo manifiestos primero para maximizar caché
COPY frontend/package.json ./
# Si existe yarn.lock en el repo, también mejora la caché
# (no falla si no existe, la copia se omite al no estar en el contexto)
COPY frontend/yarn.lock ./

# Usa caché de Yarn y amplia timeout de red en builders remotos
RUN --mount=type=cache,target=/root/.cache/yarn \
    yarn install --non-interactive --network-timeout 600000

# Ahora copiamos el resto del código
COPY frontend/ .

# Deshabilita sourcemaps para acelerar el build
ENV GENERATE_SOURCEMAP=false
RUN yarn build

## ---------- Stage 2: Python backend (FastAPI) ----------
FROM python:3.11-slim AS app
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1
WORKDIR /app

# System deps (optional but useful for some libs)
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Python deps
COPY backend/requirements.txt backend/requirements.txt
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r backend/requirements.txt

# App code
COPY backend/ ./backend

# Copy built frontend into image where FastAPI expects it
COPY --from=frontend-builder /frontend/build ./frontend/build

# Expose port (Railway sets PORT env var)
EXPOSE 8000

# Start Uvicorn; use PORT if present (Railway), else 8000
CMD uvicorn backend.server:app --host 0.0.0.0 --port ${PORT:-8000}
