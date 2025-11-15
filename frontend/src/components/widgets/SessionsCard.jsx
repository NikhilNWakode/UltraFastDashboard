export default function SessionsCard({ value, loading }) {
  const isHigh = !loading && value?.sessions >= 500;

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col gap-3 min-h-[94px]">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75M12 17a4 4 0 00-4-4h8a4 4 0 00-4 4z" />
          </svg>
        </span>
        <p className="text-gray-500 font-medium text-sm">Active Sessions</p>
        {isHigh && (
          <span className="ml-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
            High
          </span>
        )}
      </div>
      {loading ? (
        <div className="h-8 w-24 rounded-xl bg-slate-100 animate-pulse mx-auto mt-2"></div>
      ) : (
        <h2 className="text-3xl font-bold text-gray-900">{value?.sessions ?? "--"}</h2>
      )}
      <span className="text-xs text-gray-400 mt-1">currently online</span>
    </div>
  );
}
