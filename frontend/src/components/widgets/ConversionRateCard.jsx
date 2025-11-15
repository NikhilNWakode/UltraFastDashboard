export default function ConversionRateCard({ value, loading, trend }) {
  // Apple style: soft, airy, minimalist badge
  const accentColor =
    trend?.direction === "up"
      ? "bg-green-100 text-green-700"
      : trend?.direction === "down"
      ? "bg-red-100 text-red-700"
      : "bg-slate-100 text-blue-700";

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm flex flex-col gap-2 h-full min-h-[114px]">
      <p className="text-gray-500 font-medium text-sm mb-1">Conversion Rate</p>
      {loading ? (
        <div className="h-8 w-24 bg-slate-100 rounded-xl animate-pulse mt-3"></div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">{value ?? "--"}<span className="font-normal text-xl">%</span></span>
          {trend && (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${accentColor}`}>
              {trend.direction === "up" ? "▲" : "▼"} {trend.percent}%
            </span>
          )}
        </div>
      )}
      <span className="text-xs text-gray-400 mt-1">compared to last period</span>
    </div>
  );
}
