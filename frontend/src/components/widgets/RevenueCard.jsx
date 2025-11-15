export default function RevenueCard({ value, loading, target }) {
  const isHigh = !loading && target && value >= target;

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col gap-3 min-h-[94px]">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 8c-3.3 0-6 2.24-6 5s2.7 5 6 5 6-2.24 6-5-2.7-5-6-5zm0 9c-2.73 0-5-1.77-5-4 0-2.23 2.27-4 5-4s5 1.77 5 4c0 2.23-2.27 4-5 4z" />
            <path d="M12 4v4" />
          </svg>
        </span>
        <p className="text-gray-500 font-medium text-sm">Revenue</p>
        {isHigh && (
          <span className="ml-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
            Target Met
          </span>
        )}
      </div>
      {loading ? (
        <div className="h-8 w-32 rounded-xl bg-slate-100 animate-pulse mx-auto mt-2"></div>
      ) : (
        <h2 className="text-3xl font-bold text-gray-900">
          ₹ {value ? Number(value).toLocaleString() : "--"}
        </h2>
      )}
      <span className="text-xs text-gray-400 mt-1">this month's revenue</span>
    </div>
  );
}
