import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar />

      <TopNavbar />

      <main className="ml-64 pt-16">
        <div className="p-6">
          <Outlet />
        </div>
      </main>

    </div>
  );
}

export default DashboardLayout;