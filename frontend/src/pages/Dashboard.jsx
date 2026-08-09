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

function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Documents",
      value: "24",
      change: "+12%",
      icon: FileText,
    },
    {
      title: "Invoices Generated",
      value: "18",
      change: "+8%",
      icon: Receipt,
    },
    {
      title: "AI Queries",
      value: "86",
      change: "+24%",
      icon: MessageSquare,
    },
    {
      title: "Security Alerts",
      value: "3",
      change: "-18%",
      icon: ShieldCheck,
    },
  ];

  const activities = [
    {
      title: "Business document analyzed",
      time: "10 minutes ago",
      icon: FileText,
    },
    {
      title: "Invoice INV-0018 generated",
      time: "1 hour ago",
      icon: Receipt,
    },
    {
      title: "Government scheme searched",
      time: "2 hours ago",
      icon: Landmark,
    },
    {
      title: "Website security scan completed",
      time: "Yesterday",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Good morning, Business Owner 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Here's what's happening with your business today.
        </p>
      </div>

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

            {/* Ask AI Copilot */}
            <button
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

            {/* Upload Document */}
            <button
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

            {/* Find Government Schemes */}
            <button
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

            {/* Scan Security */}
            <button
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
              87%
            </p>

            <p className="text-slate-400 text-sm mt-1">
              Business Health Score
            </p>

          </div>

          <div className="w-full h-2 bg-slate-700 rounded-full mt-5">
            <div className="h-2 w-[87%] bg-blue-500 rounded-full"></div>
          </div>

          <p className="text-sm text-slate-300 mt-6 leading-relaxed">
            Your business activity is performing well. Consider
            exploring government funding schemes and reviewing
            recent security alerts.
          </p>

          <button className="mt-6 w-full py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">
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

        <div className="space-y-4">

          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {activity.title}
                    </p>

                    <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;