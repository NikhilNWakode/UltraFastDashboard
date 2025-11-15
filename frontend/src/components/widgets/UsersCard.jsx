export default function UsersCard({ value, loading }) {
  const isHigh = !loading && value >= 1000;

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col gap-3 min-h-[94px]">
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-50 text-cyan-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <p className="text-gray-500 font-medium text-sm">Users</p>
        {isHigh && (
          <span className="ml-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold">
            High
          </span>
        )}
      </div>
      {loading ? (
        <div className="h-8 w-20 rounded-xl bg-slate-100 animate-pulse mx-auto mt-2"></div>
      ) : (
        <h2 className="text-3xl font-bold text-gray-900">{value ?? "--"}</h2>
      )}
      <span className="text-xs text-gray-400 mt-1">total platform users</span>
    </div>
  );
}
