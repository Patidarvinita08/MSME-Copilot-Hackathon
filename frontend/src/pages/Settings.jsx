
import { useState } from "react";

import {
  User,
  Bell,
  Shield,
  Moon,
  Globe,
  Save,
  CheckCircle2,
} from "lucide-react";

function Settings() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your MSME Copilot account and preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="bg-white rounded-2xl border p-6">

        <div className="flex items-center gap-3 mb-6">
          <User className="text-blue-600" />

          <h2 className="text-xl font-semibold">
            Profile
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Business Owner Name"
            className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Business Name"
            className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="GST Number"
            className="px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Preferences */}
      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Preferences
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <Bell className="text-orange-500" />
              <span>Email Notifications</span>
            </div>

            <input
              type="checkbox"
              defaultChecked
            />

          </div>

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <Shield className="text-green-600" />
              <span>Security Alerts</span>
            </div>

            <input
              type="checkbox"
              defaultChecked
            />

          </div>

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <Moon className="text-purple-600" />
              <span>Dark Mode</span>
            </div>

            <input type="checkbox" />

          </div>

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <Globe className="text-blue-600" />
              <span>Language</span>
            </div>

            <select className="border rounded-lg px-3 py-2">
              <option>English</option>
              <option>Hindi</option>
            </select>

          </div>

        </div>

      </div>

      {/* Save Button */}
      <div className="flex justify-end items-center gap-4">

        {saved && (
          <div className="flex items-center gap-2 text-green-600 text-sm">
            <CheckCircle2 className="w-5 h-5" />
            Changes saved successfully
          </div>
        )}

        <button
          type="button"
          onClick={handleSave}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          <Save className="w-5 h-5" />

          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;

