import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function SalesChart({ data, loading }) {
  if (loading || !data)
    return (
      <div className="h-80 bg-white rounded-xl shadow border border-slate-200 animate-pulse" />
    );

  // Optionally calculate total or latest sales for dashboard highlight
  const lastValue = Array.isArray(data) && data.length > 0 ? data[data.length - 1].value : "--";

  return (
    <div className="bg-white rounded-xl shadow border border-slate-200 w-full">
      <div className="flex items-center justify-between px-6 pt-5 pb-0">
        <p className="text-lg font-semibold text-slate-700">Sales (Last 14 Days)</p>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-medium">
          Latest: ₹ {lastValue}
        </span>
      </div>
      <div className="h-80 w-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={{ stroke: "#94a3b8" }}
            />
            <YAxis
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={{ stroke: "#94a3b8" }}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #dbeafe",
                borderRadius: 8,
                fontSize: 14,
                color: "#2563eb",
              }}
            />
            <Legend
              verticalAlign="top"
              iconType="plainline"
              height={24}
              formatter={() => (
                <span className="text-slate-500 text-xs">Sales</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4, fill: "#2563eb" }}
              activeDot={{ r: 6, fill: "#1d4ed8" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
