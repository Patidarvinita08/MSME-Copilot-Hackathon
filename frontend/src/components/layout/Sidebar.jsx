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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-white flex flex-col">

      {/* LOGO */}
      <div className="h-20 flex items-center px-6 border-b border-slate-800">

        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
          <Bot className="w-6 h-6" />
        </div>

        <div className="ml-3">
          <h1 className="font-bold text-lg">
            MSME Copilot
          </h1>

          <p className="text-xs text-slate-400">
            AI Business Assistant
          </p>
        </div>

      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">

        <p className="px-3 mb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Workspace
        </p>

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >

              <Icon className="w-5 h-5" />

              <span>
                {item.name}
              </span>

            </NavLink>
          );
        })}

      </nav>

      {/* USER / LOGOUT */}
      <div className="p-4 border-t border-slate-800">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
            V
          </div>

          <div className="flex-1 min-w-0">

            <p className="text-sm font-medium truncate">
              Demo User
            </p>

            <p className="text-xs text-slate-500 truncate">
              demo@msmecopilot.ai
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;