import {
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

function TopNavbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">

      {/* SEARCH */}
      <div className="relative w-80">

        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

        <input
          type="text"
          placeholder="Search MSME Copilot..."
          className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-xl">

          <Sparkles className="w-4 h-4 text-blue-600" />

          <span className="text-sm font-medium text-blue-700">
            AI Copilot Active
          </span>

        </div>

        <button className="relative p-2.5 rounded-xl hover:bg-slate-100">

          <Bell className="w-5 h-5 text-slate-600" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />

        </button>

        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          V
        </div>

      </div>

    </header>
  );
}

export default TopNavbar;