import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function TopProductsChart({ data, loading }) {
  if (loading || !data)
    return (
      <div className="h-80 bg-white rounded-xl shadow border border-slate-200 animate-pulse" />
    );

  // Optionally: calculate highest sales for header
  const top = Array.isArray(data) && data.length > 0 ? data[0].sales : "--";

  return (
    <div className="bg-white rounded-xl shadow border border-slate-200 w-full">
      <div className="flex items-center justify-between px-6 pt-5 pb-0">
        <p className="text-lg font-semibold text-slate-700">Top Products</p>
        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-medium">
          Top: {top}
        </span>
      </div>
      <div className="h-80 w-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="name"
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
                border: "1px solid #d1fae5",
                borderRadius: 8,
                fontSize: 14,
                color: "#0f766e",
              }}
            />
            <Legend
              verticalAlign="top"
              iconType="rect"
              height={24}
              formatter={() => (
                <span className="text-slate-500 text-xs">Sales</span>
              )}
            />
            <Bar 
              dataKey="sales" 
              fill="#10b981" 
              radius={[5, 5, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
