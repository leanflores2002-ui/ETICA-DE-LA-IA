## ---------- Stage 1: Build frontend (React) ----------
# syntax=docker/dockerfile:1.4

FROM node:20-bookworm-slim AS frontend-builder
WORKDIR /frontend

# Copiamos solo manifiestos primero para maximizar caché
COPY frontend/package.json ./

# Ajustes de red y caché para Yarn
ENV YARN_CACHE_FOLDER=/root/.cache/yarn
RUN yarn config set network-timeout 600000 -g && yarn config set network-concurrency 4 -g

# Instala dependencias con reintentos para mitigar timeouts de red en builders remotos
RUN --mount=type=cache,id=yarn-cache,target=/root/.cache/yarn bash -lc ' \
  for i in 1 2 3 4 5; do \
    yarn install --non-interactive && exit 0; \
    echo "yarn install falló (intento $i), reintentando en 10s..."; \
    sleep 10; \
  done; \
  echo "yarn install no pudo completarse tras 5 intentos; probando npm install como fallback"; \
  npm install --no-audit --no-fund'

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
RUN --mount=type=cache,id=pip-cache,target=/root/.cache/pip \
    pip install --no-cache-dir --root-user-action=ignore --upgrade pip \
    && pip install --no-cache-dir --root-user-action=ignore -r backend/requirements.txt

# App code
COPY backend/ ./backend

# Copy built frontend into image where FastAPI expects it
COPY --from=frontend-builder /frontend/build ./frontend/build

# Expose port (Railway sets PORT env var)
EXPOSE 8000

# Start Uvicorn; use PORT if present (Railway), else 8000
CMD uvicorn backend.server:app --host 0.0.0.0 --port ${PORT:-8000}
