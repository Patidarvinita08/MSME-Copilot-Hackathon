import os

from dotenv import load_dotenv
from google import genai

from fastapi import (
    Depends,
    FastAPI,
    File,
    UploadFile,
    HTTPException,
)

from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from app.database.database import Base, engine, get_db
from app.models.document import Document

# ============================================================
# ENVIRONMENT
# ============================================================

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError(
        "GEMINI_API_KEY is not configured"
    )

client = genai.Client(
    api_key=GEMINI_API_KEY
)

GEMINI_MODEL = "gemini-3.6-flash"


# ============================================================
# DATABASE
# ============================================================

Base.metadata.create_all(
    bind=engine
)


# ============================================================
# FASTAPI APPLICATION
# ============================================================

app = FastAPI(
    title="MSME Copilot AI Backend",
    description="AI-powered assistant for MSME business support",
    version="1.0.0",
)


# ============================================================
# CORS
# ============================================================

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# ROOT
# ============================================================

@app.get("/")
def home():
    return {
        "message": "MSME Copilot AI Backend Running Successfully",
        "status": "success",
    }


# ============================================================
# HEALTH CHECK
# ============================================================

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "MSME Copilot AI",
    }


# ============================================================
# DASHBOARD
# ============================================================

@app.get("/api/dashboard")
def dashboard(
    db: Session = Depends(get_db),
):
    document_count = (
        db.query(Document).count()
    )

    return {
        "message": "Dashboard API is working",

        "modules": [
            "Business Insights",
            "Government Schemes",
            "Financial Assistance",
            "AI Business Assistant",
        ],

        "stats": {
            "documents": document_count,
            "insights": 12,
            "schemes": 8,
            "financial_assistance": "₹4.8L",
        },
    }


# ============================================================
# AI CHAT
# ============================================================

@app.post("/api/chat")
def chat(request: dict):

    message = request.get(
        "message",
        "",
    ).strip()

    if not message:
        return {
            "reply": "Please enter a message so I can help you."
        }

    prompt = f"""
You are MSME Copilot AI, an intelligent business assistant
for Micro, Small and Medium Enterprises (MSMEs) in India.

Help users with:

- Business planning
- Government schemes
- Financial assistance
- Invoicing
- Documents
- Cybersecurity awareness
- Marketing
- Business growth

Give practical, clear and easy-to-understand answers.

When discussing government schemes, explain:

1. Scheme name
2. Main benefit
3. Who can apply
4. Important eligibility conditions
5. What the business owner should do next

Avoid making unsupported promises about loan approval,
subsidies, or eligibility.

Encourage users to verify current details on official
government portals.

User question:
{message}
"""

    try:

        response = client.models.generate_content(
            model=GEMINI_MODEL,
            contents=prompt,
        )

        return {
            "reply": response.text
        }

    except Exception as e:

        print("========================================")
        print("GEMINI ERROR:", repr(e))
        print("========================================")

        return {
            "reply": (
                "Sorry, I am temporarily unable to connect "
                "to the AI service. Please try again in a moment."
            )
        }


# ============================================================
# DOCUMENTS - GET ALL
# ============================================================

@app.get("/api/documents")
def get_documents(
    db: Session = Depends(get_db),
):

    documents = (
        db.query(Document)
        .order_by(Document.id.desc())
        .all()
    )

    return {
        "message": "Documents fetched successfully",

        "documents": [
            {
                "id": document.id,
                "name": document.name,
                "type": document.file_type,
                "status": document.status,

                "date": (
                    document.created_at.strftime(
                        "%Y-%m-%d"
                    )
                    if document.created_at
                    else ""
                ),

                "size": document.file_size,
            }

            for document in documents
        ],
    }


# ============================================================
# DOCUMENTS - UPLOAD
# ============================================================

@app.post("/api/documents/upload")
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    upload_dir = "uploads"

    os.makedirs(
        upload_dir,
        exist_ok=True,
    )

    # Make sure a filename exists
    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="Invalid file name",
        )

    file_path = os.path.join(
        upload_dir,
        file.filename,
    )

    # Read uploaded file
    contents = await file.read()

    # Save physical file
    with open(
        file_path,
        "wb",
    ) as buffer:
        buffer.write(contents)

    # Calculate display size
    file_size = len(contents)

    if file_size < 1024:

        size_display = (
            f"{file_size} B"
        )

    elif file_size < 1024 * 1024:

        size_display = (
            f"{file_size / 1024:.1f} KB"
        )

    else:

        size_display = (
            f"{file_size / (1024 * 1024):.1f} MB"
        )

    # Save database record
    document = Document(
        name=file.filename,
        file_type=(
            file.content_type
            or "Unknown"
        ),
        file_size=size_display,
        status="Processing",
    )

    db.add(document)

    db.commit()

    db.refresh(document)

    return {
        "message": "Document uploaded successfully",

        "document": {
            "id": document.id,
            "name": document.name,
            "file_type": document.file_type,
            "file_size": document.file_size,
            "status": document.status,
        },
    }


# ============================================================
# DOCUMENTS - DOWNLOAD
# ============================================================

@app.get(
    "/api/documents/{document_id}/download"
)
def download_document(
    document_id: int,
    db: Session = Depends(get_db),
):

    document = (
        db.query(Document)
        .filter(
            Document.id == document_id
        )
        .first()
    )

    if not document:

        raise HTTPException(
            status_code=404,
            detail="Document not found",
        )

    upload_dir = "uploads"

    file_path = os.path.join(
        upload_dir,
        document.name,
    )

    if not os.path.exists(
        file_path
    ):

        raise HTTPException(
            status_code=404,
            detail="Document file not found on server",
        )

    return FileResponse(
        path=file_path,
        filename=document.name,
        media_type=document.file_type,
    )


# ============================================================
# DOCUMENTS - DELETE
# ============================================================

@app.delete("/api/documents/{document_id}")
def delete_document(
    document_id: int,
    db: Session = Depends(get_db),
):
    document = (
        db.query(Document)
        .filter(Document.id == document_id)
        .first()
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found",
        )

    # Remove physical file from uploads folder
    upload_dir = "uploads"
    file_path = os.path.join(upload_dir, document.name)
    if os.path.exists(file_path):
        os.remove(file_path)

    # Remove database entry
    db.delete(document)
    db.commit()

    return {
        "status": "success",
        "message": "Document deleted successfully",
        "document_id": document_id,
    }


# ============================================================
# GOVERNMENT SCHEMES
# ============================================================

@app.get("/api/schemes")
def get_schemes():

    schemes = [

        {
            "id": 1,
            "name": "Pradhan Mantri MUDRA Yojana",
            "category": "Business Finance",
            "description": (
                "Provides credit support to eligible "
                "micro and small businesses."
            ),
            "benefit": (
                "Business financing support through "
                "eligible lending institutions."
            ),
            "eligibility": (
                "Micro enterprises and eligible small "
                "businesses requiring business finance."
            ),
            "next_step": (
                "Review the latest MUDRA requirements "
                "and approach an eligible lending institution."
            ),
        },

        {
            "id": 2,
            "name": "Prime Minister's Employment Generation Programme",
            "category": "Employment",
            "description": (
                "Supports eligible entrepreneurs "
                "in establishing new micro enterprises."
            ),
            "benefit": (
                "Credit-linked subsidy support for "
                "eligible new micro enterprises."
            ),
            "eligibility": (
                "Eligible individuals and entities meeting "
                "the current PMEGP conditions."
            ),
            "next_step": (
                "Check the latest PMEGP guidelines and "
                "application process on the official portal."
            ),
        },

        {
            "id": 3,
            "name": "CGTMSE",
            "category": "Credit Support",
            "description": (
                "Provides credit guarantee support "
                "for eligible micro and small enterprises."
            ),
            "benefit": (
                "Credit guarantee support that can help "
                "eligible businesses obtain institutional credit."
            ),
            "eligibility": (
                "Eligible micro and small enterprises "
                "meeting the current CGTMSE requirements."
            ),
            "next_step": (
                "Check the latest CGTMSE guidelines and "
                "contact an eligible member lending institution."
            ),
        },

        {
            "id": 4,
            "name": "Udyam Registration",
            "category": "MSME Registration",
            "description": (
                "Official MSME registration framework "
                "for eligible enterprises."
            ),
            "benefit": (
                "Official MSME registration and access "
                "to applicable MSME-related benefits."
            ),
            "eligibility": (
                "Enterprises that qualify as micro, small, "
                "or medium enterprises under applicable rules."
            ),
            "next_step": (
                "Verify the latest registration requirements "
                "and complete registration through the official portal."
            ),
        },

    ]

    return {
        "message": "Government schemes fetched successfully",
        "schemes": schemes,
    }


# ============================================================
# INVOICE
# ============================================================

@app.post("/api/invoice")
def create_invoice(
    invoice_data: dict,
):

    return {
        "status": "success",
        "message": "Invoice created successfully",
        "invoice": invoice_data,
    }


# ============================================================
# SECURITY SCANNER
# ============================================================

@app.post("/api/security")
def security_scan(data: dict):

    print("================================")
    print("SECURITY REQUEST RECEIVED")
    print("DATA:", data)
    print("================================")

    target = data.get("input")

    print("TARGET:", repr(target))

    if target is None:
        return {
            "status": "error",
            "message": "input field is missing",
        }

    target = str(target).strip()

    if not target:
        return {
            "status": "error",
            "message": "input field is empty",
        }

    # Detect suspicious indicators
    detected = []
    keywords = ["password", "verify", "urgent", "account", "bank", "click", "login", "update"]
    for word in keywords:
        if word in target.lower():
            detected.append(word)

    # Determine risk level
    if len(detected) >= 4:
        risk_level = "High"
        confidence = min(95, 70 + len(detected) * 5)
        recommendation = (
            "This content contains multiple suspicious indicators. "
            "Do not click unknown links, download files, or share "
            "passwords and financial information."
        )
    elif len(detected) >= 2:
        risk_level = "Medium"
        confidence = min(85, 55 + len(detected) * 8)
        recommendation = (
            "This content contains some suspicious indicators. "
            "Verify the sender and website independently before "
            "taking any action."
        )
    elif len(detected) == 1:
        risk_level = "Medium"
        confidence = 65
        recommendation = (
            "One potentially suspicious indicator was detected. "
            "Exercise caution and verify the source before proceeding."
        )
    else:
        risk_level = "Low"
        confidence = 92
        recommendation = (
            "No obvious security indicators were detected. "
            "Continue to verify unfamiliar links and messages "
            "before sharing sensitive information."
        )

    return {
        "status": "success",
        "target": target,
        "risk_level": risk_level,
        "confidence": confidence,
        "recommendation": recommendation,
        "indicators": detected,
    }