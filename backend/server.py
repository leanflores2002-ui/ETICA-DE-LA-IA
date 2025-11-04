from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.getenv('MONGO_URL')
db_name = os.getenv('DB_NAME')
client = None
db = None
if mongo_url and db_name:
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
else:
    logging.warning("MongoDB not configured. Set MONGO_URL and DB_NAME.")

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# In-memory fallback storage when MongoDB is not configured
IN_MEMORY_STATUS: List[StatusCheck] = []

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)

    # Fallback to in-memory list if DB not configured
    if db is None:
        IN_MEMORY_STATUS.append(status_obj)
        return status_obj

    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()

    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Fallback to in-memory list if DB not configured
    if db is None:
        return IN_MEMORY_STATUS
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    if client is not None:
        client.close()

# Serve static frontend with SPA fallback (single-service deploy)
FRONTEND_BUILD_DIR = ROOT_DIR.parent / "frontend" / "build"
INDEX_FILE = FRONTEND_BUILD_DIR / "index.html"

if FRONTEND_BUILD_DIR.exists() and INDEX_FILE.exists():
    try:
        static_dir = FRONTEND_BUILD_DIR / "static"
        if static_dir.exists():
            app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")
        favicon = FRONTEND_BUILD_DIR / "favicon.ico"
        manifest = FRONTEND_BUILD_DIR / "manifest.json"

        if favicon.exists():
            @app.get("/favicon.ico")
            async def favicon_route():
                return FileResponse(str(favicon))

        if manifest.exists():
            @app.get("/manifest.json")
            async def manifest_route():
                return FileResponse(str(manifest))

        @app.get("/")
        async def serve_root():
            return FileResponse(str(INDEX_FILE))

        @app.get("/{full_path:path}")
        async def spa_fallback(full_path: str):
            candidate = FRONTEND_BUILD_DIR / full_path
            if candidate.exists() and candidate.is_file():
                return FileResponse(str(candidate))
            return FileResponse(str(INDEX_FILE))

        logger.info(f"Serving frontend build with SPA fallback from {FRONTEND_BUILD_DIR}")
    except Exception as e:
        logger.warning(f"Could not configure static frontend: {e}")
else:
    logger.info("Frontend build not found; API-only mode.")
