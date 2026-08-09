import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 42000, expenses: 25000 },
  { month: "Feb", revenue: 48000, expenses: 28000 },
  { month: "Mar", revenue: 45000, expenses: 27000 },
  { month: "Apr", revenue: 57000, expenses: 31000 },
  { month: "May", revenue: 62000, expenses: 34000 },
  { month: "Jun", revenue: 68000, expenses: 38000 },
];

function RevenueChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">

      <div className="mb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Revenue & Expenses
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Business performance over the last 6 months
        </p>
      </div>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#0f172a"
              fill="#e2e8f0"
              strokeWidth={2}
            />

            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#94a3b8"
              fill="#f8fafc"
              strokeWidth={2}
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RevenueChart;