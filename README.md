# Despliegue en Railway

Este repositorio tiene dos partes: `backend` (FastAPI + MongoDB) y `frontend` (React + CRA). A continuación, cómo desplegar cada una en Railway como servicios separados del mismo proyecto.

## Requisitos
- Cuenta en Railway y el repositorio conectado a Railway.
- Base de datos MongoDB (puedes usar el addon de Railway). Guarda el `connection string`.

## Opción 1 (recomendada): Un solo servicio (FastAPI sirve el frontend)

Se añadió un `Dockerfile` en la raíz que:
- Construye el frontend (`frontend/`) con Node + Yarn.
- Copia el build estático dentro de la imagen Python.
- Inicia FastAPI con Uvicorn sirviendo `/api/*` y los archivos estáticos en `/`.

Pasos en Railway:
- Create Service → Deploy from Repo → selecciona este repo.
- No uses Monorepo Root para subcarpetas (deja la raíz `.`) para que tome el `Dockerfile`.
- En Variables, añade: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` (opcional, si sirves el frontend desde el mismo dominio puedes omitirla o dejar `*`).
- Railway detectará el Dockerfile y construirá la imagen. El servicio expondrá en `PORT`.

Notas:
- Health API: `GET /api/` → `{ "message": "Hello World" }`.
- El frontend queda montado en `/` y hace fallback a `index.html` para rutas de SPA.

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

## Desarrollo local

Para trabajar en local con el backend en Python y el frontend React manteniendo una buena separación y viendo los cambios al instante:

1) Backend (FastAPI)
- Crear y activar tu entorno: `python -m venv .venv && source .venv/bin/activate` (Windows: `.venv\\Scripts\\activate`)
- Instalar dependencias: `pip install -r backend/requirements.txt`
- Ejecutar en desarrollo: `uvicorn backend.server:app --reload --port 8000`
- Nota: Si no configuras `MONGO_URL`/`DB_NAME`, los endpoints `/api/status` usarán un almacenamiento en memoria para desarrollo.

2) Frontend (React + CRA/CRACO)
- Ir a la carpeta: `cd frontend`
- Instalar dependencias: `yarn`
- Iniciar: `yarn start`
- El archivo `frontend/package.json` incluye `"proxy": "http://localhost:8000"` para que las llamadas a `/api/*` se redirijan al backend.

3) Probar integración
- Abre `http://localhost:3000`
- En la página de inicio verás un bloque de demostración “Estado de clientes” donde puedes crear registros y listarlos desde el backend.
