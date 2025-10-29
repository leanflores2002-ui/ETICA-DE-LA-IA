## ---------- Stage 1: Build frontend (React) ----------
FROM node:20-bookworm-slim AS frontend-builder
WORKDIR /frontend

# Use Yarn available in the Node image (Corepack-managed)
# Copy entire frontend (no lockfile in repo)
COPY frontend/ .
RUN yarn install --non-interactive \
    && yarn build

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
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r backend/requirements.txt

# App code
COPY backend/ ./backend

# Copy built frontend into image where FastAPI expects it
COPY --from=frontend-builder /frontend/build ./frontend/build

# Expose port (Railway sets PORT env var)
EXPOSE 8000

# Start Uvicorn; use PORT if present (Railway), else 8000
CMD uvicorn backend.server:app --host 0.0.0.0 --port ${PORT:-8000}
