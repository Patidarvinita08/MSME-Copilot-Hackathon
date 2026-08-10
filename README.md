# 🚀 MSME Copilot AI

### AI-Powered Business Operating Assistant for MSMEs

**MSME Copilot AI** is an AI-powered business operating assistant designed to bring essential business services, AI assistance, document management, government schemes, invoicing, analytics, and cybersecurity support into a single platform for Micro, Small, and Medium Enterprises (MSMEs).

---

## 👥 Team

### Team Name

**TECH GIRLS**

### Team Members

| Name                 | Role                         |
| -------------------- | ---------------------------- |
| **Vinita Patidar**   | AI/ML & Full Stack Developer |
| **Suryanshi Mourya** | Backend & Integration        |
| **Khushi Yadav**     | Presentation                 |

---

# 🎯 Problem Statement

Micro, Small, and Medium Enterprises (MSMEs) face several challenges in managing their day-to-day business operations.

Business owners often need to:

* Find relevant government schemes
* Manage important business documents
* Create and manage invoices
* Understand business information
* Monitor business analytics
* Get answers to operational questions
* Address potential cybersecurity concerns

Existing solutions are often fragmented across multiple platforms, making business management time-consuming and difficult, particularly for small businesses with limited technical resources.

---

# 💡 Solution

**MSME Copilot AI** brings essential MSME business services together into one intelligent platform.

The platform provides:

* 🤖 **AI Business Assistant** – Ask business-related questions and receive AI-powered responses.
* 📄 **Document Management** – Upload, manage, download, and delete business documents.
* 🏛️ **Government Schemes** – Discover relevant government schemes and financial assistance opportunities.
* 🧾 **Invoice Management** – Support for creating and managing business invoices.
* 🔐 **Cybersecurity Assistance** – Help businesses identify and respond to potential cybersecurity risks.
* 📊 **Business Analytics** – View important business information and insights.
* 💬 **AI Chat** – Interact with the AI system for business-related assistance.
* ⚙️ **Settings** – Manage platform-related settings.

The goal is to make MSME business operations **simpler, faster, and more accessible through AI**.

---

# ⭐ Unique Selling Point

MSME Copilot AI combines multiple business-support functions into a **single AI-powered operating platform for MSMEs**.

### Key differentiators

* 🤖 AI-powered business assistance
* 📄 Centralized document management
* 🏛️ Government scheme discovery
* 🧾 Invoice support
* 📊 Business analytics
* 🔐 Cybersecurity assistance
* 💬 AI conversational interface
* 🧩 Modular full-stack architecture

---

# ✨ Key Features

| Feature                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| 🤖 AI Assistant        | AI-powered business support                      |
| 💬 AI Chat             | Conversational interaction with the AI assistant |
| 📄 Documents           | Upload and manage business documents             |
| 🏛️ Government Schemes | Discover relevant MSME schemes                   |
| 🧾 Invoices            | Business invoice support                         |
| 🔐 Cybersecurity       | Cybersecurity assistance                         |
| 📊 Analytics           | Business insights and analytics                  |
| 📈 Dashboard           | Centralized business overview                    |
| ⚙️ Settings            | Application settings management                  |

---

# 🖥️ Platform Modules

The application frontend contains dedicated pages/modules for:

```text
AI Assistant
Analytics
Chat
Dashboard
Documents
Invoice
Login
Schemes
Security
Settings
```

These modules provide the main user-facing functionality of MSME Copilot AI.

---

# 🏗️ System Architecture

```text
                    ┌───────────────────────┐
                    │       MSME User       │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   React Frontend      │
                    │       + Vite          │
                    └───────────┬───────────┘
                                │
                           REST APIs
                                │
                                ▼
                    ┌───────────────────────┐
                    │    FastAPI Backend    │
                    └───────────┬───────────┘
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
        AI / Agents          Services          Database
             │                  │                  │
             ▼                  ▼                  ▼
        Gemini / AI          Business          SQLite /
        Assistance           Logic             ChromaDB
             │
             ▼
       AI Responses /
       Business Insights
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* React Router
* Lucide React

## Backend

* Python
* FastAPI
* SQLAlchemy
* SQLite
* REST APIs

## Artificial Intelligence

* Generative AI
* Google Gemini API
* AI-powered business assistant
* RAG-related components

## Data / Storage

* SQLite
* ChromaDB

## Development Tools

* Git
* GitHub
* VS Code
* npm
* Python Virtual Environment

---

# 📁 Project Structure

The following structure is based on the project structure shown in the project screen recording.

```text
MSME-Copilot-Hackathon/
│
├── backend/
│   │
│   ├── app/
│   │   ├── agents/
│   │   ├── api/
│   │   ├── auth/
│   │   ├── config/
│   │   ├── core/
│   │   ├── database/
│   │   ├── models/
│   │   ├── rag/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── tests/
│   ├── venv/
│   ├── .env
│   ├── chroma_db/
│   ├── msme.db
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   │
│   ├── node_modules/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AIAssistant.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Documents.jsx
│   │   │   ├── Invoice.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Schemes.jsx
│   │   │   ├── Security.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── services/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

> **Note:** Do not include `node_modules/` or `venv/` in the GitHub repository. They should remain excluded through `.gitignore`.

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Patidarvinita08/MSME-Copilot-Hackathon.git
cd MSME-Copilot-Hackathon
```

---

# 2. Backend Setup

Open a terminal and navigate to the backend:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

---

# 3. Environment Variables

Create a `.env` file inside the backend directory.

```env
GEMINI_API_KEY=your_gemini_api_key
```

Keep your API key private and **never commit the `.env` file to GitHub**.

---

# 4. Start the Backend

Run:

```bash
uvicorn main:app --reload
```

The backend will normally be available at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 5. Frontend Setup

Open another terminal.

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# 🔄 How the Platform Works

```text
User
  │
  ▼
React Frontend
  │
  ▼
FastAPI REST API
  │
  ├──► Authentication
  │
  ├──► AI Assistant
  │
  ├──► Documents
  │
  ├──► Government Schemes
  │
  ├──► Invoices
  │
  ├──► Analytics
  │
  └──► Security
          │
          ▼
      AI / Business Logic
          │
          ▼
      Database / Storage
          │
          ▼
       Response
          │
          ▼
       MSME User
```

---

# 📊 Dashboard

The dashboard provides a centralized interface for MSME users to access important business services and information.

Major areas include:

* Business overview
* Analytics
* Documents
* Invoices
* Government schemes
* AI assistance
* Security

---

# 🤖 AI Business Assistant

The AI Assistant enables MSME users to ask business-related questions and receive AI-powered responses.

The backend contains dedicated AI/agent components to support intelligent business assistance.

---

# 📄 Document Management

The document module allows users to work with business documents through the platform.

Supported operations include:

* Upload documents
* Manage documents
* Download documents
* Delete documents

---

# 🏛️ Government Schemes

The Schemes module helps MSMEs discover relevant government schemes and financial assistance opportunities.

This can help business owners reduce the time required to search across multiple sources.

---

# 🧾 Invoice Management

The Invoice module provides functionality for business invoice management.

It is designed to simplify invoice-related business operations within the same platform.

---

# 🔐 Cybersecurity Assistance

The Security module provides cybersecurity-related assistance to MSMEs.

It is intended to help businesses better understand potential security concerns and take appropriate action.

---

# 📈 Analytics

The Analytics module provides business-related information and insights through a dedicated interface.

---

# 🎥 Demo

### GitHub Repository

https://github.com/Patidarvinita08/MSME-Copilot-Hackathon


### Demo Video

(https://drive.google.com/file/d/1rvkH2Z6X9DBnNCs0gXSQmz_DOPxMfQX9/view?usp=drive_link)

---

# 🏆 Hackathon

**Event:** HackMatrix 2026 – Round 2

**Project:** MSME Copilot AI

**Team:** TECH GIRLS

---

# 🚀 Future Scope

Future improvements may include:

* Multi-agent AI architecture
* Advanced Retrieval-Augmented Generation (RAG)
* Personalized government scheme recommendations
* Automated financial analysis
* Advanced invoice generation
* Business analytics and forecasting
* WhatsApp/voice-based AI assistant
* Multilingual support for Indian MSMEs
* Advanced business intelligence
* Additional MSME integrations

---

# 🎯 Project Goal

The primary goal of **MSME Copilot AI** is to provide MSMEs with a unified, intelligent, and easy-to-use platform that reduces operational complexity and enables business owners to make faster and better-informed decisions.

---

# 📄 License

This project is developed by **Team TECH GIRLS** for educational and hackathon purposes.

