const API_BASE_URL = "http://127.0.0.1:8000";

// ============================================================
// HELPER - PARSE ERROR
// ============================================================

async function parseError(response) {
  try {
    const data = await response.json();
    return data.detail || data.message || "Request failed";
  } catch {
    const text = await response.text();
    return text || "Request failed";
  }
}

// ============================================================
// HEALTH CHECK
// ============================================================

export async function checkBackendHealth() {
  const response = await fetch(`${API_BASE_URL}/`);

  if (!response.ok) {
    throw new Error("Backend is not running");
  }

  return response.json();
}

// ============================================================
// DASHBOARD
// ============================================================

export async function getDashboardData() {
  const response = await fetch(`${API_BASE_URL}/api/dashboard`);

  if (!response.ok) {
    const errorMsg = await parseError(response);
    throw new Error(errorMsg || "Failed to fetch dashboard data");
  }

  return response.json();
}

// ============================================================
// AI CHAT
// ============================================================

export async function sendChatMessage(message) {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    const errorMsg = await parseError(response);
    throw new Error(errorMsg || "Failed to send chat message");
  }

  return response.json();
}

// ============================================================
// DOCUMENTS - GET
// ============================================================

export async function getDocuments() {
  const response = await fetch(`${API_BASE_URL}/api/documents`);

  if (!response.ok) {
    const errorMsg = await parseError(response);
    throw new Error(errorMsg || "Failed to fetch documents");
  }

  return response.json();
}

// ============================================================
// DOCUMENTS - UPLOAD
// ============================================================

export async function uploadDocument(file) {
  if (!file) {
    throw new Error("Please select a file");
  }

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${API_BASE_URL}/api/documents/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorMsg = await parseError(response);
    throw new Error(errorMsg || "Failed to upload document");
  }

  return response.json();
}

// ============================================================
// DOCUMENTS - DELETE
// ============================================================

export async function deleteDocument(documentId) {
  if (!documentId) {
    throw new Error("Document ID is required");
  }

  const response = await fetch(
    `${API_BASE_URL}/api/documents/${documentId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    const errorMsg = await parseError(response);
    throw new Error(errorMsg || "Failed to delete document");
  }

  return response.json();
}

// ============================================================
// DOCUMENTS - DOWNLOAD
// ============================================================

export function getDocumentDownloadUrl(documentId) {
  if (!documentId) {
    throw new Error("Document ID is required");
  }

  return `${API_BASE_URL}/api/documents/${documentId}/download`;
}

// ============================================================
// GOVERNMENT SCHEMES
// ============================================================

export async function getSchemes() {
  const response = await fetch(
    `${API_BASE_URL}/api/schemes`
  );

  if (!response.ok) {
    const errorMsg = await parseError(response);
    throw new Error(
      errorMsg || "Failed to fetch government schemes"
    );
  }

  return response.json();
}

// ============================================================
// INVOICE
// ============================================================

export async function createInvoice(invoiceData) {
  const response = await fetch(
    `${API_BASE_URL}/api/invoice`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoiceData),
    }
  );

  if (!response.ok) {
    const errorMsg = await parseError(response);
    throw new Error(
      errorMsg || "Failed to create invoice"
    );
  }

  return response.json();
}

// ============================================================
// SECURITY
// ============================================================

export async function scanSecurity(data) {
  console.log("Sending security data:", data);
  console.log("INPUT VALUE:", data.input);

  const response = await fetch(
    `${API_BASE_URL}/api/security`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: data.input,
      }),
    }
  );

  const result = await response.json();

  console.log(
    "Security backend result:",
    result
  );

  if (!response.ok) {
    throw new Error(
      result.message || "Security scan failed"
    );
  }

  return result;
}