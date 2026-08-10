import { Bell, Search, Sparkles } from "lucide-react";

function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-6 backdrop-blur lg:px-8">

      {/* SEARCH */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search MSME Copilot..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* RIGHT ACTIONS */}
      <div className="ml-6 flex items-center gap-3">

        {/* AI STATUS */}
        <div className="hidden items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 md:flex">
          <Sparkles className="h-4 w-4 text-blue-600" />

          <span className="text-sm font-medium text-blue-700">
            AI Copilot Active
          </span>
        </div>

        {/* NOTIFICATIONS */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl p-2.5 transition hover:bg-slate-100"
        >
          <Bell className="h-5 w-5 text-slate-600" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* USER AVATAR */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          V
        </div>

      </div>
    </header>
  );
}

export default TopNavbar;