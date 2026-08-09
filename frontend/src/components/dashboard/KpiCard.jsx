import {
  TrendingUp,
  TrendingDown,
  FileText,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const iconMap = {
  revenue: TrendingUp,
  expenses: TrendingDown,
  invoices: Receipt,
  documents: FileText,
  security: ShieldCheck,
};

function KpiCard({
  title,
  value,
  change,
  description,
  type,
  positive = true,
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>

      </div>

      <div className="mt-4 flex items-center gap-2">

        <span
          className={`text-xs font-semibold ${
            positive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-slate-400">
          {description}
        </span>

      </div>

    </div>
  );
}

export default KpiCard;