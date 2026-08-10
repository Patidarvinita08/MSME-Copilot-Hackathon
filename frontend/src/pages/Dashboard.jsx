import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FileText,
  Receipt,
  ShieldCheck,
  Landmark,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  Clock,
} from "lucide-react";

import { getDashboardData } from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getDashboardData();
        setDashboardData(data);
      } catch (err) {
        console.error("Dashboard API error:", err);
        setError("Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const stats = [
    {
      title: "Documents",
      value: dashboardData?.documents ?? 0,
      change: "+12%",
      icon: FileText,
    },
    {
      title: "Invoices Generated",
      value: dashboardData?.invoices ?? 0,
      change: "+8%",
      icon: Receipt,
    },
    {
      title: "AI Queries",
      value: dashboardData?.ai_queries ?? 0,
      change: "+24%",
      icon: MessageSquare,
    },
    {
      title: "Security Alerts",
      value: dashboardData?.security_alerts ?? 0,
      change: "-18%",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Good morning, Business Owner 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Here's what's happening with your business today.
        </p>
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
      {loading ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-sm text-slate-500">
            Loading dashboard...
          </p>
        </div>
      ) : (
        <>
          {/* KPI CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between">

                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>

                    <span className="text-sm font-medium text-green-600">
                      {stat.change}
                    </span>

                  </div>

                  <p className="text-slate-500 text-sm mt-5">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900 mt-1">
                    {stat.value}
                  </h2>
                </div>
              );
            })}

          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* QUICK ACTIONS */}
            <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Quick Actions
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Access your most frequently used tools.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* ASK AI */}
                <button
                  type="button"
                  onClick={() => navigate("/chat")}
                  className="group text-left p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  <div className="flex justify-between">

                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />

                  </div>

                  <h3 className="font-semibold text-slate-900 mt-4">
                    Ask AI Copilot
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Get instant business assistance.
                  </p>
                </button>

                {/* DOCUMENTS */}
                <button
                  type="button"
                  onClick={() => navigate("/documents")}
                  className="group text-left p-5 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition"
                >
                  <div className="flex justify-between">

                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600" />

                  </div>

                  <h3 className="font-semibold text-slate-900 mt-4">
                    Upload Document
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Analyze your business documents.
                  </p>
                </button>

                {/* SCHEMES */}
                <button
                  type="button"
                  onClick={() => navigate("/schemes")}
                  className="group text-left p-5 rounded-xl border border-slate-200 hover:border-green-300 hover:bg-green-50 transition"
                >
                  <div className="flex justify-between">

                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-green-600" />
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-green-600" />

                  </div>

                  <h3 className="font-semibold text-slate-900 mt-4">
                    Find Government Schemes
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Discover schemes for your business.
                  </p>
                </button>

                {/* SECURITY */}
                <button
                  type="button"
                  onClick={() => navigate("/security")}
                  className="group text-left p-5 rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition"
                >
                  <div className="flex justify-between">

                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-orange-600" />

                  </div>

                  <h3 className="font-semibold text-slate-900 mt-4">
                    Scan Security
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Check URLs and suspicious messages.
                  </p>
                </button>

              </div>
            </div>

            {/* AI INSIGHT */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>

                <div>
                  <h2 className="font-semibold">
                    AI Business Insight
                  </h2>

                  <p className="text-xs text-slate-400">
                    Powered by MSME Copilot
                  </p>
                </div>

              </div>

              <div className="mt-8">

                <p className="text-3xl font-bold">
                  {dashboardData?.health_score ?? 87}%
                </p>

                <p className="text-slate-400 text-sm mt-1">
                  Business Health Score
                </p>

              </div>

              <div className="w-full h-2 bg-slate-700 rounded-full mt-5">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{
                    width: `${dashboardData?.health_score ?? 87}%`,
                  }}
                />
              </div>

              <p className="text-sm text-slate-300 mt-6 leading-relaxed">
                Your business activity is performing well. Consider
                exploring government funding schemes and reviewing
                recent security alerts.
              </p>

              <button
                type="button"
                onClick={() => navigate("/chat")}
                className="mt-6 w-full py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
              >
                View AI Recommendations
              </button>

            </div>

          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Activity
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Your latest activity across MSME Copilot.
                </p>
              </div>

            </div>

            {/* EMPTY ACTIVITY STATE */}
            <div className="py-10 text-center">

              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-slate-400" />
              </div>

              <p className="mt-4 font-medium text-slate-700">
                No recent activity
              </p>

              <p className="text-sm text-slate-400 mt-1">
                Your latest business activities will appear here.
              </p>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default Dashboard;