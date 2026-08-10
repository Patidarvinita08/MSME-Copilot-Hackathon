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
  Bot,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "AI Chat",
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
      name: "Invoice Generator",
      path: "/invoice",
      icon: Receipt,
    },
    {
      name: "Security Scanner",
      path: "/security",
      icon: ShieldCheck,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-slate-950 text-white">

      {/* BRAND */}
      <div className="flex h-20 items-center border-b border-slate-800 px-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 shadow-sm">
          <Bot className="h-5 w-5" />
        </div>

        <div className="ml-3 min-w-0">
          <h1 className="truncate text-base font-bold">
            MSME Copilot
          </h1>

          <p className="mt-0.5 truncate text-xs text-slate-400">
            AI Business Assistant
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 overflow-y-auto px-3 py-6">

        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`h-[18px] w-[18px] shrink-0 transition ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 group-hover:text-white"
                      }`}
                    />

                    <span className="truncate">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* USER AREA */}
      <div className="border-t border-slate-800 p-4">

        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
            V
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              Demo User
            </p>

            <p className="truncate text-xs text-slate-500">
              demo@msmecopilot.ai
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-[18px] w-[18px]" />
          <span>Logout</span>
        </button>

      </div>
    </aside>
  );
}

export default Sidebar;