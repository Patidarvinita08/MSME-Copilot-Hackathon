import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

function TopNavbar() {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

      {/* Search */}
      <div className="flex w-80 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">

        <Search className="h-4 w-4 text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />

      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100">
          <Bell className="h-5 w-5" />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-100">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            VP
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium text-slate-900">
              Business Admin
            </p>

            <p className="text-xs text-slate-500">
              MSME Account
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-slate-400" />

        </button>

      </div>

    </header>
  );
}

export default TopNavbar;