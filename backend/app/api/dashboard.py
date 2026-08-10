from fastapi import APIRouter

router = APIRouter(
    prefix="/api",
    tags=["Dashboard"]
)

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