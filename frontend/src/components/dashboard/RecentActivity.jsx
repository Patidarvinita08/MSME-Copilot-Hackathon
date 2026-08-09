const activities = [
  {
    action: "Invoice generated",
    details: "INV-2026-024",
    time: "10 min ago",
    status: "Completed",
  },
  {
    action: "Document uploaded",
    details: "Business_Policy.pdf",
    time: "32 min ago",
    status: "Processed",
  },
  {
    action: "Security scan",
    details: "example.com",
    time: "1 hour ago",
    status: "Safe",
  },
  {
    action: "AI consultation",
    details: "GST compliance question",
    time: "2 hours ago",
    status: "Completed",
  },
];

function RecentActivity() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white">

      <div className="border-b border-slate-200 px-5 py-4">

        <h2 className="text-base font-semibold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Latest actions across your workspace
        </p>

      </div>

      <div className="divide-y divide-slate-100">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-4"
          >

            <div>
              <p className="text-sm font-medium text-slate-800">
                {activity.action}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {activity.details}
              </p>
            </div>

            <div className="text-right">

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {activity.status}
              </span>

              <p className="mt-1 text-xs text-slate-400">
                {activity.time}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivity;