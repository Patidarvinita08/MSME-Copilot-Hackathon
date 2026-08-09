import { Link } from "react-router-dom";

import {
  Sparkles,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";

function AIInsights() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">

      <div className="flex items-center gap-2">

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900">
          <Sparkles className="h-4 w-4 text-white" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">
            AI Business Insights
          </h2>

          <p className="text-xs text-slate-500">
            Generated from your business activity
          </p>
        </div>

      </div>

      <div className="mt-5 space-y-4">

        <div className="flex gap-3">

          <div className="mt-0.5">
            <ArrowUpRight className="h-4 w-4 text-emerald-600" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-800">
              Revenue is trending upward
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Revenue increased by approximately 9.6% compared with the previous month.
            </p>
          </div>

        </div>

        <div className="flex gap-3">

          <div className="mt-0.5">
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-800">
              Review operating expenses
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Your expense ratio has increased slightly. Consider reviewing recurring costs.
            </p>
          </div>

        </div>

      </div>

      <Link
        to="/chat"
        className="mt-5 inline-flex text-sm font-semibold text-slate-900 hover:underline"
      >
        Ask AI for recommendations →
      </Link>

    </div>
  );
}

export default AIInsights;