
import { useState } from "react";

import {
  ShieldCheck,
  Search,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Link2,
  Mail,
  MessageSquareText,
} from "lucide-react";

import { scanSecurity } from "../services/api";

function Security() {
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ============================================================
  // SECURITY SCAN
  // ============================================================

  const handleScan = async (event) => {
    event.preventDefault();

    if (!target.trim()) {
      setError("Please enter something to scan.");
      setResult(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const data = await scanSecurity({
        input: target.trim(),
      });

      console.log(
        "Security API response:",
        JSON.stringify(data, null, 2)
      );

      if (data.status === "error") {
        setError(data.message || "Unable to scan this content.");
        return;
      }

      setResult(data);
    } catch (err) {
      console.error("Security scan error:", err);

      setError(
        err.message || "Unable to complete the security scan."
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // CLEAR
  // ============================================================

  const handleClear = () => {
    setTarget("");
    setResult(null);
    setError("");
  };

  // ============================================================
  // RISK STYLES
  // ============================================================

  const getRiskStyles = (risk) => {
    const normalizedRisk = String(risk || "low").toLowerCase();

    if (normalizedRisk === "high") {
      return {
        wrapper: "bg-red-50 border-red-200",
        icon: "bg-red-100 text-red-600",
        text: "text-red-700",
      };
    }

    if (normalizedRisk === "medium") {
      return {
        wrapper: "bg-amber-50 border-amber-200",
        icon: "bg-amber-100 text-amber-600",
        text: "text-amber-700",
      };
    }

    return {
      wrapper: "bg-green-50 border-green-200",
      icon: "bg-green-100 text-green-600",
      text: "text-green-700",
    };
  };

  // ============================================================
  // NORMALIZE RESULT
  // ============================================================

  const risk =
    result?.risk_level ||
    result?.risk ||
    "Low";

  const confidence =
    result?.confidence ?? 0;

  const recommendation =
    result?.recommendation ||
    result?.message ||
    "No immediate security concerns were detected.";

  const indicators =
    result?.indicators ||
    result?.detected ||
    [];

  const styles = getRiskStyles(risk);

  // ============================================================
  // UI
  // ============================================================

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>
        <p className="text-sm font-medium text-blue-600 mb-2">
          CYBERSECURITY
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Security Scanner
        </h1>

        <p className="text-slate-500 mt-2">
          Check suspicious URLs, messages, and business
          content for potential security risks.
        </p>
      </div>


      {/* SCANNER */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* INPUT CARD */}

        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Scan for Security Risks
              </h2>

              <p className="text-sm text-slate-500">
                Enter a URL, email, or suspicious message.
              </p>
            </div>

          </div>


          <form
            onSubmit={handleScan}
            className="mt-6"
          >

            <label className="text-sm font-medium text-slate-700">
              Content to scan
            </label>

            <textarea
              value={target}
              onChange={(event) =>
                setTarget(event.target.value)
              }
              placeholder="Paste a suspicious URL, email, or message here..."
              rows={7}
              className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-500"
            />


            <div className="flex flex-col sm:flex-row gap-3 mt-4">

              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >

                <Search className="w-5 h-5" />

                {loading
                  ? "Scanning..."
                  : "Scan Now"}

              </button>


              <button
                type="button"
                onClick={handleClear}
                className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
              >
                Clear
              </button>

            </div>

          </form>


          {/* ERROR */}

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3">

              <XCircle className="w-5 h-5 text-red-500" />

              <p className="text-sm text-red-600">
                {error}
              </p>

            </div>
          )}

        </div>


        {/* SCANNER INFO */}

        <div className="bg-slate-900 rounded-2xl p-6 text-white">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>

            <div>

              <h2 className="font-semibold">
                AI Security Check
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                MSME Copilot Protection
              </p>

            </div>

          </div>


          <div className="space-y-4 mt-7">

            <div className="flex gap-3">

              <Link2 className="w-5 h-5 text-blue-400 shrink-0" />

              <div>

                <p className="text-sm font-medium">
                  Suspicious URLs
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Identify potentially dangerous links.
                </p>

              </div>

            </div>


            <div className="flex gap-3">

              <Mail className="w-5 h-5 text-purple-400 shrink-0" />

              <div>

                <p className="text-sm font-medium">
                  Scam Messages
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Check suspicious business communications.
                </p>

              </div>

            </div>


            <div className="flex gap-3">

              <MessageSquareText className="w-5 h-5 text-green-400 shrink-0" />

              <div>

                <p className="text-sm font-medium">
                  Risk Indicators
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Highlight suspicious patterns.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* RESULT */}

      {result && (

        <div
          className={`border rounded-2xl p-6 ${styles.wrapper}`}
        >

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            {/* RISK */}

            <div className="flex items-center gap-4">

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.icon}`}
              >

                {String(risk).toLowerCase() === "high" ||
                  String(risk).toLowerCase() === "medium" ? (
                  <AlertTriangle className="w-6 h-6" />
                ) : (
                  <CheckCircle2 className="w-6 h-6" />
                )}

              </div>


              <div>

                <p className="text-sm text-slate-500">
                  Risk Level
                </p>

                <h3
                  className={`text-2xl font-bold capitalize ${styles.text}`}
                >
                  {risk}
                </h3>

              </div>

            </div>


            {/* CONFIDENCE */}

            <div className="text-left md:text-right">

              <p className="text-sm text-slate-500">
                Confidence
              </p>

              <p className="text-2xl font-bold text-slate-900">
                {confidence}%
              </p>

            </div>

          </div>


          {/* CONFIDENCE BAR */}

          <div className="mt-5">

            <div className="w-full h-2 bg-white/70 rounded-full overflow-hidden">

              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(
                    Math.max(Number(confidence) || 0,
                      0),
                    100
                  )}%`,
                }}
              />

            </div>

          </div>


          {/* RECOMMENDATION */}

          <div className="mt-6 bg-white/70 rounded-xl p-4">

            <p className="text-sm font-semibold text-slate-900">
              Recommendation
            </p>

            <p className="text-sm text-slate-600 mt-1">
              {recommendation}
            </p>

          </div>


          {/* INDICATORS */}

          {indicators.length > 0 && (

            <div className="mt-5">

              <p className="text-sm font-semibold text-slate-900">
                Detected Indicators
              </p>

              <div className="flex flex-wrap gap-2 mt-3">

                {indicators.map(
                  (indicator, index) => (

                    <span
                      key={`${indicator}-${index}`}
                      className="px-3 py-1.5 rounded-lg bg-red-100 text-red-700 text-xs font-medium"
                    >
                      {indicator}
                    </span>

                  )
                )}

              </div>

            </div>

          )}

        </div>

      )}


      {/* QUICK TIPS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <ShieldCheck className="w-5 h-5 text-blue-600" />

          <h3 className="font-semibold text-slate-900 mt-4">
            Verify Links
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Check unfamiliar URLs before entering
            passwords or financial information.
          </p>

        </div>


        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <AlertTriangle className="w-5 h-5 text-amber-600" />

          <h3 className="font-semibold text-slate-900 mt-4">
            Watch Urgency
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Be cautious of messages demanding immediate
            payment or account verification.
          </p>

        </div>


        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <CheckCircle2 className="w-5 h-5 text-green-600" />

          <h3 className="font-semibold text-slate-900 mt-4">
            Stay Protected
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Never share sensitive business credentials
            with unknown contacts.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Security;

