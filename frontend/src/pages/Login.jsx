import { Bot, ShieldCheck, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left side */}
        <div className="hidden bg-slate-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <Bot size={24} />
              </div>

              <div>
                <h1 className="font-bold">MSME Copilot</h1>
                <p className="text-xs text-slate-400">
                  AI Business Assistant
                </p>
              </div>
            </div>

            <div className="mt-24 max-w-lg">
              <p className="mb-4 text-sm font-medium text-blue-400">
                SMARTER BUSINESS MANAGEMENT
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Your business.
                <br />
                Powered by AI.
              </h2>

              <p className="mt-6 text-slate-400">
                Simplify business decisions, discover government schemes,
                manage documents and improve your business security from one
                intelligent workspace.
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Sparkles size={16} />
              AI Powered
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck size={16} />
              Secure
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">

            <div className="mb-8 lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Bot size={21} />
                </div>

                <div>
                  <h1 className="font-bold text-slate-900">
                    MSME Copilot
                  </h1>
                  <p className="text-xs text-slate-500">
                    AI Business Assistant
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Sign in to manage your business with MSME Copilot.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-medium text-slate-700">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-medium text-blue-600 hover:text-blue-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Sign in
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-slate-400">
                Demo authentication for hackathon MVP
              </p>
            </div>

            <p className="mt-6 text-center text-xs text-slate-400">
              © 2026 MSME Copilot AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;