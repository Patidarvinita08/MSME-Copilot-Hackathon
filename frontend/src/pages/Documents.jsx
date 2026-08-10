
import { useEffect, useRef, useState } from "react";

import {
  FileText,
  CheckCircle2,
  Clock3,
  Upload,
  Trash2,
  Download,
} from "lucide-react";

import {
  getDocuments,
  uploadDocument,
  deleteDocument,
  getDocumentDownloadUrl,
} from "../services/api";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fileInputRef = useRef(null);

  // ==========================================
  // LOAD DOCUMENTS
  // ==========================================

  const loadDocuments = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getDocuments();

      setDocuments(data.documents || []);
    } catch (err) {
      console.error("Documents API error:", err);
      setError("Unable to load documents.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  // ==========================================
  // OPEN FILE SELECTOR
  // ==========================================

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // ==========================================
  // UPLOAD DOCUMENT
  // ==========================================

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      setUploading(true);
      setError("");
      setSuccess("");

      await uploadDocument(file);

      setSuccess("Document uploaded successfully.");

      await loadDocuments();
    } catch (err) {
      console.error("Upload document error:", err);

      setError(
        err.message || "Unable to upload document."
      );
    } finally {
      setUploading(false);

      event.target.value = "";
    }
  };

  // ==========================================
  // DELETE DOCUMENT
  // ==========================================

  const handleDelete = async (documentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(documentId);
      setError("");
      setSuccess("");

      await deleteDocument(documentId);

      setDocuments((currentDocuments) =>
        currentDocuments.filter(
          (document) => document.id !== documentId
        )
      );

      setSuccess("Document deleted successfully.");
    } catch (err) {
      console.error("Delete document error:", err);

      setError(
        err.message || "Unable to delete document."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // DOWNLOAD DOCUMENT
  // ==========================================

  const handleDownload = (documentId) => {
    const downloadUrl =
      getDocumentDownloadUrl(documentId);

    window.open(downloadUrl, "_blank");
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <p className="text-sm font-medium text-blue-600 mb-2">
            DOCUMENT CENTER
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            Business Documents
          </h1>

          <p className="text-slate-500 mt-2">
            Manage and organize important business documents.
          </p>
        </div>

        <div>

          <button
            type="button"
            onClick={handleUploadClick}
            disabled={uploading}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            <Upload className="w-4 h-4" />

            {uploading
              ? "Uploading..."
              : "Upload Document"}
          </button>

          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.jpg,.jpeg,.png"
          />

        </div>
      </div>

      {/* SUCCESS */}

      {success && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
          <p className="text-sm text-green-700">
            {success}
          </p>
        </div>
      )}

      {/* ERROR */}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
          <p className="text-sm text-red-600">
            {error}
          </p>
        </div>
      )}

      {/* LOADING */}

      {loading && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-sm text-slate-500">
            Loading documents...
          </p>
        </div>
      )}

      {/* DOCUMENT LIST */}

      {!loading && (
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

          <div className="px-6 py-5 border-b border-slate-100">

            <h2 className="font-semibold text-slate-900">
              Your Documents
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              {documents.length}{" "}
              {documents.length === 1
                ? "document"
                : "documents"}{" "}
              available
            </p>

          </div>

          {/* EMPTY STATE */}

          {documents.length === 0 ? (

            <div className="p-10 text-center">

              <FileText className="w-10 h-10 mx-auto text-slate-300" />

              <p className="mt-3 font-medium text-slate-700">
                No documents found
              </p>

              <p className="text-sm text-slate-400 mt-1">
                Upload a document to get started.
              </p>

              <button
                type="button"
                onClick={handleUploadClick}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                <Upload className="w-4 h-4" />
                Upload Document
              </button>

            </div>

          ) : (

            <div className="divide-y divide-slate-100">

              {documents.map((document) => (

                <div
                  key={document.id}
                  className="px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-slate-50 transition"
                >

                  {/* DOCUMENT INFO */}

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>

                    <div>

                      <h3 className="font-medium text-slate-900 break-all">
                        {document.name}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        {document.type || "Unknown file type"}
                        {" • "}
                        {document.date || "No date"}

                        {document.size
                          ? ` • ${document.size}`
                          : ""}
                      </p>

                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div className="flex items-center gap-3">

                    {/* STATUS */}

                    {document.status === "Verified" ? (

                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified
                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
                        <Clock3 className="w-3.5 h-3.5" />
                        {document.status || "Pending"}
                      </span>

                    )}

                    {/* DOWNLOAD */}

                    <button
                      type="button"
                      onClick={() =>
                        handleDownload(document.id)
                      }
                      title="Download document"
                      className="p-2 rounded-lg text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <Download className="w-5 h-5" />
                    </button>

                    {/* DELETE */}

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(document.id)
                      }
                      disabled={
                        deletingId === document.id
                      }
                      title="Delete document"
                      className="p-2 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >

                      {deletingId === document.id ? (

                        <span className="block w-5 h-5 border-2 border-slate-300 border-t-red-600 rounded-full animate-spin" />

                      ) : (

                        <Trash2 className="w-5 h-5" />

                      )}

                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>
      )}

    </div>
  );
}

export default Documents;

