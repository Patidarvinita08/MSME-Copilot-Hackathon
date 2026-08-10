
import { useEffect, useState } from "react";

import {
  Landmark,
  ArrowUpRight,
  CheckCircle2,
  Search,
  Wallet,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { getSchemes } from "../services/api";

function Schemes() {
  const [schemes, setSchemes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const loadSchemes = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getSchemes();

        setSchemes(data.schemes || []);
      } catch (err) {
        console.error("Schemes API error:", err);
        setError("Unable to load government schemes.");
      } finally {
        setLoading(false);
      }
    };

    loadSchemes();
  }, []);

  const toggleDetails = (id) => {
    setExpandedId((currentId) =>
      currentId === id ? null : id
    );
  };

  const filteredSchemes = schemes.filter((scheme) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      scheme.name?.toLowerCase().includes(query) ||
      scheme.category?.toLowerCase().includes(query) ||
      scheme.description?.toLowerCase().includes(query) ||
      scheme.benefit?.toLowerCase().includes(query) ||
      scheme.eligibility?.toLowerCase().includes(query)
    );
  });

  // Official scheme websites
  const officialSchemeLinks = {
    "Pradhan Mantri MUDRA Yojana":
      "https://www.mudra.org.in/",

    "Prime Minister's Employment Generation Programme":
      "https://www.kviconline.gov.in/",

    CGTMSE:
      "https://www.cgtmse.in/",

    "Udyam Registration":
      "https://udyamregistration.gov.in/",
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <p className="text-sm font-medium text-blue-600 mb-2">
          GOVERNMENT SUPPORT
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Government Schemes
        </h1>

        <p className="text-slate-500 mt-2">
          Discover government programs and financial support
          opportunities for your MSME.
        </p>
      </div>

      {/* SEARCH */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <div className="relative max-w-xl">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search schemes, categories, benefits..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>
      </div>

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
            Loading government schemes...
          </p>
        </div>
      )}

      {/* CONTENT */}
      {!loading && !error && (
        <>
          {/* SECTION HEADER */}
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Available Programs
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              {filteredSchemes.length} scheme
              {filteredSchemes.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* EMPTY STATE */}
          {filteredSchemes.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">

              <Landmark className="w-10 h-10 text-slate-300 mx-auto" />

              <h3 className="font-semibold text-slate-900 mt-4">
                No schemes found
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Try another search term.
              </p>

            </div>
          ) : (

            /* SCHEME CARDS */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {filteredSchemes.map((scheme) => {

                const isExpanded =
                  expandedId === scheme.id;

                return (
                  <div
                    key={scheme.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition"
                  >

                    {/* TOP */}
                    <div className="flex items-start justify-between gap-4">

                      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Landmark className="w-5 h-5 text-blue-600" />
                      </div>

                      <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                        {scheme.category}
                      </span>

                    </div>

                    {/* NAME */}
                    <h3 className="text-lg font-semibold text-slate-900 mt-5">
                      {scheme.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-slate-500 mt-2 leading-6">
                      {scheme.description}
                    </p>

                    {/* BENEFIT */}
                    <div className="mt-5">

                      <div className="flex items-start gap-3">

                        <Wallet className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />

                        <div>
                          <p className="text-xs text-slate-400">
                            Potential Benefit
                          </p>

                          <p className="text-sm font-medium text-slate-700 mt-0.5">
                            {scheme.benefit ||
                              "Check the official scheme guidelines for current benefits."}
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* DETAILS BUTTON */}
                    <button
                      type="button"
                      onClick={() => toggleDetails(scheme.id)}
                      className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
                    >

                      {isExpanded ? (
                        <>
                          Hide Scheme Details
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Scheme Details
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}

                    </button>

                    {/* EXPANDED DETAILS */}
                    {isExpanded && (
                      <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-5">

                        {/* ELIGIBILITY */}
                        <div className="flex items-start gap-3">

                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />

                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              Eligibility
                            </p>

                            <p className="text-sm text-slate-600 mt-1 leading-6">
                              {scheme.eligibility ||
                                "Eligibility depends on the latest official scheme guidelines and applicant requirements."}
                            </p>
                          </div>

                        </div>

                        {/* NEXT STEP */}
                        <div className="flex items-start gap-3">

                          <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />

                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              What to do next
                            </p>

                            <p className="text-sm text-slate-600 mt-1 leading-6">
                              {scheme.next_step ||
                                "Review the latest eligibility and application requirements on the official government portal."}
                            </p>
                          </div>

                        </div>

                        {/* OFFICIAL LINK */}
                        <a
                          href={
                            officialSchemeLinks[scheme.name] ||
                            "https://www.myscheme.gov.in/"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
                        >
                          Explore Official Scheme
                          <ArrowUpRight className="w-4 h-4" />
                        </a>

                      </div>
                    )}

                  </div>
                );
              })}

            </div>
          )}

          {/* INFORMATION NOTE */}
          {filteredSchemes.length > 0 && (
            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4">

              <div className="flex items-start gap-3">

                <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />

                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    Important
                  </p>

                  <p className="text-sm text-blue-700 mt-1 leading-6">
                    Scheme eligibility, benefits, limits and
                    application requirements can change. Always
                    verify the latest information through the
                    relevant official government portal before
                    applying.
                  </p>
                </div>

              </div>

            </div>
          )}

        </>
      )}

    </div>
  );
}

export default Schemes;

