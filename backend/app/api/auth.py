

# Import APIRouter from FastAPI
from fastapi import APIRouter

# Import schemas for registration and login
from app.schemas.user import UserCreate


from app.services.security import hash_password




# Create an API router
router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

# POST /auth/register
# UserCreate validates the registration data
@router.post("/register")
def register(user: UserCreate):

    hashed = hash_password(user.password)

    return {
        "name": user.name,
        "email": user.email,
        "hashed_password": hashed
    }
from app.schemas.user import UserLogin
from app.services.jwt import create_access_token


# POST /auth/login
# UserLogin validates the login data
@router.post("/login")
def login(user: UserLogin):

    token = create_access_token(
        {"sub": user.email}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }
