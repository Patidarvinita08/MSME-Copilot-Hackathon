from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini import generate_response

router = APIRouter(
    prefix="/chat",
    tags=["Gemini AI"]
)

class ChatRequest(BaseModel):
    prompt: str


@router.post("/")
def chat(request: ChatRequest):

    answer = generate_response(request.prompt)

    return {
        "response": answer
    }