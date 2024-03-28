# schemas.py - Contain pydantic models used for FastAPI requests
from pydantic import BaseModel

class PromptRequest(BaseModel):
    """Prompt Request Schema for /generate-images endpoint"""
    prompt: str