import {
  BarChart3,
  TrendingUp,
  FileText,
  Landmark,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

function Analytics() {
  const monthlyData = [
    { month: "Jan", value: 35 },
    { month: "Feb", value: 48 },
    { month: "Mar", value: 42 },
    { month: "Apr", value: 62 },
    { month: "May", value: 55 },
    { month: "Jun", value: 72 },
    { month: "Jul", value: 68 },
    { month: "Aug", value: 84 },
  ];

  const metrics = [
    {
      title: "Documents Processed",
      value: "24",
      change: "+12%",
      description: "Compared with last month",
      icon: FileText,
    },
    {
      title: "Insights Generated",
      value: "12",
      change: "+18%",
      description: "AI business insights",
      icon: BarChart3,
    },
    {
      title: "Schemes Discovered",
      value: "8",
      change: "+8%",
      description: "Potential opportunities",
      icon: Landmark,
    },
    {
      title: "Security Checks",
      value: "16",
      change: "+24%",
      description: "Scans completed",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <p className="text-sm font-medium text-blue-600 mb-2">
          BUSINESS INTELLIGENCE
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Analytics
        </h1>

        <p className="text-slate-500 mt-2">
          Understand your MSME activity and monitor business performance.
        </p>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-sm transition"
            >

              <div className="flex items-start justify-between">

                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-400" />

              </div>

              <div className="mt-5">

                <p className="text-sm text-slate-500">
                  {metric.title}
                </p>

                <div className="flex items-end gap-3 mt-1">

                  <p className="text-2xl font-bold text-slate-900">
                    {metric.value}
                  </p>

                  <span className="text-xs font-medium text-green-600 mb-1">
                    {metric.change}
                  </span>

                </div>

                <p className="text-xs text-slate-400 mt-1">
                  {metric.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* PERFORMANCE */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* CHART */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Business Activity
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Monthly activity generated through MSME Copilot.
              </p>
            </div>

            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>

          </div>

          <div className="mt-8 h-64 flex items-end gap-3">

            {monthlyData.map((item) => (
              <div
                key={item.month}
                className="flex-1 h-full flex flex-col justify-end"
              >

                <div className="relative group">

                  <div
                    className="w-full rounded-t-lg bg-blue-100 hover:bg-blue-200 transition"
                    style={{
                      height: `${item.value * 2.2}px`,
                    }}
                  />

                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 hidden group-hover:block text-xs font-medium text-slate-600">
                    {item.value}
                  </div>

                </div>

                <p className="text-xs text-slate-400 text-center mt-3">
                  {item.month}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* SUMMARY */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-400" />
            </div>

            <div>
              <h2 className="font-semibold">
                Business Summary
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Current performance
              </p>
            </div>

          </div>

          <div className="mt-7 space-y-5">

            <div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">
                  Business Activity
                </span>

                <span>
                  84%
                </span>
              </div>

              <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full w-[84%] bg-blue-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">
                  Document Processing
                </span>

                <span>
                  72%
                </span>
              </div>

              <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full w-[72%] bg-green-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">
                  Security Monitoring
                </span>

                <span>
                  91%
                </span>
              </div>

              <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full w-[91%] bg-purple-500 rounded-full" />
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-7 pt-5">

            <p className="text-xs text-slate-400">
              Overall business health
            </p>

            <div className="flex items-center justify-between mt-2">

              <p className="text-2xl font-bold">
                Excellent
              </p>

              <TrendingUp className="w-5 h-5 text-green-400" />

            </div>

          </div>

        </div>

      </div>

      {/* ACTIVITY BREAKDOWN */}
      <div>

        <div className="mb-5">

          <h2 className="text-lg font-bold text-slate-900">
            Activity Breakdown
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            How you are using MSME Copilot services.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="bg-white border border-slate-200 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>

              <span className="text-xs font-medium text-green-600">
                42%
              </span>

            </div>

            <h3 className="font-semibold text-slate-900 mt-5">
              Documents
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Document-related activity.
            </p>

          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-purple-600" />
              </div>

              <span className="text-xs font-medium text-green-600">
                31%
              </span>

            </div>

            <h3 className="font-semibold text-slate-900 mt-5">
              Government Schemes
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Scheme discovery activity.
            </p>

          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">

            <div className="flex items-center justify-between">

              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>

              <span className="text-xs font-medium text-green-600">
                27%
              </span>

            </div>

            <h3 className="font-semibold text-slate-900 mt-5">
              Security
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Security scanning activity.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;