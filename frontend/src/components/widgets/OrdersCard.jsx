export default function OrdersCard({ value, loading }) {
  const isHigh = !loading && value >= 100;

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col gap-3 min-h-[94px]">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 text-yellow-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M3 6h18M9 6v6h6V6M9 12h6M5 6l1.5 12h11L19 6" />
          </svg>
        </span>
        <p className="text-gray-500 font-medium text-sm">Orders</p>
        {isHigh && (
          <span className="ml-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 text-xs font-semibold">
            High
          </span>
        )}
      </div>
      {loading ? (
        <div className="h-8 w-24 rounded-xl bg-slate-100 animate-pulse mx-auto mt-2"></div>
      ) : (
        <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
      )}
      <span className="text-xs text-gray-400 mt-1">orders this month</span>
    </div>
  );
}
