from fastapi import APIRouter


# Create an API router
# prefix="/api" means all routes will start with /api
# tags=["Dashboard"] groups this API under Dashboard in Swagger
router = APIRouter(
    prefix="/api",
    tags=["Dashboard"]
)



# Create a GET API endpoint
# Final endpoint: GET /api/dashboard
@router.get("/dashboard")
def get_dashboard():
    return {
        "message": "Backend Connected Successfully",

        "stats": {
            "documents": 0,
            "insights": 0,
            "schemes": 0,
            "financial_assistance": "₹0"
        },

        "modules": [
            "Business Insights",
            "Government Schemes",
            "Financial Assistance",
            "AI Business Assistant"
        ]
    }
