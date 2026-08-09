import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Landmark,
  Receipt,
  ShieldCheck,
  BarChart3,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "AI Copilot",
    path: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Documents",
    path: "/documents",
    icon: FileText,
  },
  {
    name: "Government Schemes",
    path: "/schemes",
    icon: Landmark,
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: Receipt,
  },
  {
    name: "Cybersecurity",
    path: "/security",
    icon: ShieldCheck,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900">
          <Sparkles className="h-5 w-5 text-white" />
        </div>

        <div>
          <h1 className="text-sm font-bold text-slate-900">
            MSME Copilot
          </h1>

          <p className="text-xs text-slate-500">
            AI Business Assistant
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon className="h-4.5 w-4.5" />

              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-200 p-3">

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
              isActive
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          <Settings className="h-4.5 w-4.5" />
          Settings
        </NavLink>

        <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
          <LogOut className="h-4.5 w-4.5" />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;