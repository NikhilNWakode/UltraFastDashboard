export default function NotificationsCard({ value, loading }) {
  const isHigh = !loading && value >= 10;

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col gap-3 min-h-[94px]">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405C18.79 15.053 19 14.553 19 14V11a7.002 7.002 0 0 0-5-6.708V4a2 2 0 1 0-4 0v.292C8.67 5.251 8 6.522 8 8v6c0 .553.21 1.053.595 1.595L7 17h5" />
          </svg>
        </span>
        <p className="text-gray-500 font-medium text-sm">Notifications</p>
        {isHigh && (
          <span className="ml-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold">
            High
          </span>
        )}
      </div>
      {loading ? (
        <div className="h-8 w-20 rounded-xl bg-slate-100 animate-pulse mx-auto mt-2"></div>
      ) : (
        <h2 className="text-3xl font-bold text-gray-900 mt-2">{value}</h2>
      )}
      <span className="text-xs text-gray-400 mt-1">new notifications</span>
    </div>
  );
}
