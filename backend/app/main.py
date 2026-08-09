from fastapi import FastAPI

app = FastAPI(
    title="MSME Copilot AI",
    description="AI-powered backend for MSME Copilot",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "MSME Copilot AI Backend is running"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "MSME Copilot AI Backend"
    }