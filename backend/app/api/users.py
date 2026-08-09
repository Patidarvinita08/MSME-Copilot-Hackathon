from fastapi import APIRouter


# Create an API router
# prefix="/users" means all routes will start with /users
# tags=["Users"] groups this API under Users in Swagger
router = APIRouter(
    prefix="/users",
    tags=["Users"]
)
# Create a GET API endpoint
# Final endpoint: GET /users/
@router.get("/")
def get_users():
    return {"message": "Users API Working"}
