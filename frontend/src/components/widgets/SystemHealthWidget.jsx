export default function SystemHealthWidget({ value, loading }) {
  const color = {
    green: "bg-green-500",
    yellow: "bg-yellow-400 text-black",
    red: "bg-red-500",
    unknown: "bg-gray-300 text-gray-700",
  };
  const statusIcon = {
    green: "✔️",
    yellow: "⚠️",
    red: "✖",
    unknown: "?"
  };

  if (loading)
    return (
      <div className="p-5 rounded-xl bg-white shadow border border-slate-200 animate-pulse h-32" />
    );

  // Helper to safely fetch status & appropriate color
  function renderStatus(label, statusKey) {
    const status = value?.[statusKey] || "unknown";
    const statusLabel = status.toUpperCase();
    const badgeColor = color[status] || color.unknown;
    const icon = statusIcon[status] || statusIcon.unknown;
    return (
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="w-16 text-slate-600">{label}</span>
        <span className={`px-2 py-0.5 rounded text-xs font-bold ${badgeColor}`}>
          {statusLabel}
        </span>
      </div>
    );
  }

  return (
    <div className="p-5 rounded-xl bg-white shadow border border-slate-200 h-full flex flex-col justify-between">
      <p className="text-slate-500 text-sm font-medium mb-3">System Health</p>
      <div className="flex flex-col gap-3">
        {renderStatus("API", "api")}
        {renderStatus("DB", "db")}
        {renderStatus("Worker", "worker")}
      </div>
    </div>
  );
}
