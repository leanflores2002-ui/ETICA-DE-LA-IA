# Despliegue en Railway

Este repositorio tiene dos partes: `backend` (FastAPI + MongoDB) y `frontend` (React + CRA). A continuación, cómo desplegar cada una en Railway como servicios separados del mismo proyecto.

## Requisitos
- Cuenta en Railway y el repositorio conectado a Railway.
- Base de datos MongoDB (puedes usar el addon de Railway). Guarda el `connection string`.

## Backend (FastAPI)
- Directorio raíz del servicio: `backend`.
- Build/Entrypoint: se usa `Procfile` incluido.
- Variables de entorno necesarias:
  - `MONGO_URL`: cadena de conexión de MongoDB.
  - `DB_NAME`: nombre de la base de datos.
  - `CORS_ORIGINS`: orígenes permitidos (por ejemplo, `https://tu-dominio-frontend,http://localhost:3000`).

Pasos en Railway:
- Create Service → Deploy from Repo → selecciona este repo.
- En Settings del servicio, configura Monorepo → `Root Directory` = `backend`.
- En Variables, añade `MONGO_URL`, `DB_NAME` y `CORS_ORIGINS`.
- El servicio expondrá FastAPI en `PORT` (autoasignado por Railway). Health: `GET /api/`.

## Frontend (React)
- Directorio raíz del servicio: `frontend`.
- Build y start: se usa `Procfile` incluido (`yarn build && npx serve -s build -l $PORT`).

Pasos en Railway:
- Create Service → Deploy from Repo (mismo repo).
- En Settings, Monorepo → `Root Directory` = `frontend`.
- No requiere variables.
- Tras desplegar, obtendrás una URL pública del frontend.

## Notas
- Si usas el addon de MongoDB de Railway, copia su cadena de conexión en `MONGO_URL` y define `DB_NAME` según prefieras.
- Asegúrate de que `CORS_ORIGINS` incluya la URL pública del frontend para evitar problemas de CORS.
- El backend usa Uvicorn (`Procfile` en `backend/`) y el frontend sirve el build estático con `serve` vía `npx`.

## Endpoints útiles
- Backend health: `GET /api/` → `{ "message": "Hello World" }`
- Crear status: `POST /api/status` { "client_name": "..." }
