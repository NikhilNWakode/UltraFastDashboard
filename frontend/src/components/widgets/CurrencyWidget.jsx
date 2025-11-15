export default function CurrencyWidget({ value, loading, ratesTrend }) {
  if (loading)
    return (
      <div className="p-6 rounded-2xl bg-white shadow-sm animate-pulse h-32" />
    );

  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col gap-3">
      <p className="text-gray-500 font-medium text-sm mb-1">Currency Rates</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-base text-blue-800 font-medium">USD → INR:</span>
          <span className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            {value?.USD_INR ?? "--"}
            {ratesTrend?.USD_INR === "up" && (
              <span className="bg-green-50 rounded-full px-2 py-0 text-green-700 text-xs">▲</span>
            )}
            {ratesTrend?.USD_INR === "down" && (
              <span className="bg-red-50 rounded-full px-2 py-0 text-red-700 text-xs">▼</span>
            )}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base text-blue-800 font-medium">EUR → INR:</span>
          <span className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            {value?.EUR_INR ?? "--"}
            {ratesTrend?.EUR_INR === "up" && (
              <span className="bg-green-50 rounded-full px-2 py-0 text-green-700 text-xs">▲</span>
            )}
            {ratesTrend?.EUR_INR === "down" && (
              <span className="bg-red-50 rounded-full px-2 py-0 text-red-700 text-xs">▼</span>
            )}
          </span>
        </div>
      </div>
      <span className="text-xs text-gray-400 mt-2">Updated currency rates</span>
    </div>
  );
}
