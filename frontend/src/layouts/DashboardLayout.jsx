import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar />

      <div className="ml-64 min-h-screen">

        <TopNavbar />

        <main className="p-6 lg:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;