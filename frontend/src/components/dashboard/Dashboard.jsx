import KpiCard from "../components/dashboard/KpiCard";
import QuickActions from "../components/dashboard/QuickActions";
import RevenueChart from "../components/dashboard/RevenueChart";
import AIInsights from "../components/dashboard/AIInsights";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Good morning, Business Admin 👋
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">

        <KpiCard
          title="Revenue"
          value="₹68,000"
          change="+9.6%"
          description="vs last month"
          type="revenue"
        />

        <KpiCard
          title="Expenses"
          value="₹38,000"
          change="+4.2%"
          description="vs last month"
          type="expenses"
          positive={false}
        />

        <KpiCard
          title="Invoices"
          value="28"
          change="+12"
          description="this month"
          type="invoices"
        />

        <KpiCard
          title="Documents"
          value="42"
          change="+6"
          description="this month"
          type="documents"
        />

        <KpiCard
          title="Security Score"
          value="92/100"
          change="+4"
          description="this month"
          type="security"
        />

      </div>

      {/* Chart + Insights */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <AIInsights />

      </div>

      {/* Recent Activity */}
      <RecentActivity />

    </div>
  );
}

export default Dashboard;