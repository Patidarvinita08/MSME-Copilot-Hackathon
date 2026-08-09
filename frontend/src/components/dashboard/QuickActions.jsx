import { Link } from "react-router-dom";
import {
  MessageSquare,
  Upload,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const actions = [
  {
    title: "Ask AI",
    description: "Get business guidance",
    icon: MessageSquare,
    path: "/chat",
  },
  {
    title: "Upload Document",
    description: "Analyze your files",
    icon: Upload,
    path: "/documents",
  },
  {
    title: "Create Invoice",
    description: "Generate GST invoice",
    icon: Receipt,
    path: "/invoice",
  },
  {
    title: "Security Scan",
    description: "Check a URL or email",
    icon: ShieldCheck,
    path: "/security",
  },
];

function QuickActions() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Link
            key={action.title}
            to={action.path}
            className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
          >
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 transition group-hover:bg-slate-900">
                <Icon className="h-5 w-5 text-slate-700 group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {action.title}
                </h3>

                <p className="mt-0.5 text-xs text-slate-500">
                  {action.description}
                </p>
              </div>

            </div>
          </Link>
        );
      })}

    </div>
  );
}

export default QuickActions;