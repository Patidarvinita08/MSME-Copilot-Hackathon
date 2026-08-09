import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Prototype login
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl">
            🤖
          </div>

          <h1 className="text-3xl font-bold text-white">
            MSME Copilot AI
          </h1>

          <p className="mt-2 text-slate-400">
            Your AI-powered business assistant
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

          <h2 className="text-2xl font-semibold text-white">
            Welcome back
          </h2>

          <p className="mt-1 mb-6 text-sm text-slate-400">
            Sign in to access your business dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Sign In
            </button>

          </form>

          {/* Demo Information */}
          <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
            <p className="text-center text-xs text-slate-400">
              Hackathon Prototype
            </p>

            <p className="mt-1 text-center text-sm text-slate-300">
              Enter any email and password to continue
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © 2026 MSME Copilot AI • Smart Business Assistance
        </p>

      </div>

    </div>
  );
}

export default Login;