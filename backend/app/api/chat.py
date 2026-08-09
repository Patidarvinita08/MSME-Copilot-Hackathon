
# Import APIRouter from FastAPI
from fastapi import APIRouter

# Import BaseModel to create and validate the request body
from pydantic import BaseModel

from app.services.gemini import generate_response


# Create an API router
# All routes in this router will start with /chat
router = APIRouter(
    prefix="/chat",
    tags=["Gemini AI"]
)

class ChatRequest(BaseModel):
    prompt: str

# Create a POST API endpoint
# Final endpoint: POST /chat/
@router.post("/")
def chat(request: ChatRequest):

    answer = generate_response(request.prompt)

    return {
        "response": answer
    }
