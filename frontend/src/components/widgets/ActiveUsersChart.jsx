import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f97316", "#6366f1", "#ef4444"];

// Custom Tooltip for full info
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, percent } = payload[0];
    return (
      <div className="bg-white text-sm p-2 rounded shadow border border-slate-200">
        <span className="font-semibold">{name}</span>
        <div>
          Users: <b>{value}</b>
        </div>
        <div>Share: <b>{(percent * 100).toFixed(1)}%</b></div>
      </div>
    );
  }
  return null;
};

// Custom Legend
function ChartLegend({ data, colors }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 px-3">
      {data.map((entry, i) => (
        <span key={entry.name} className="flex items-center gap-2 text-sm text-slate-500">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: colors[i] }}></span>
          {entry.name}
        </span>
      ))}
    </div>
  );
}

export default function ActiveUsersChart({ data, loading }) {
  if (loading || !data)
    return (
      <div className="h-80 bg-white rounded-xl shadow-sm border border-slate-200 animate-pulse"></div>
    );

  const pieData = [
    { name: "Mobile", value: data?.mobile || 0 },
    { name: "Web", value: data?.web || 0 },
    { name: "Tablet", value: data?.tablet || 0 },
    { name: "API Clients", value: data?.api_clients || 0 },
    { name: "IoT", value: data?.iot || 0 },
  ];
  const total = pieData.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="bg-white rounded-xl shadow border border-slate-200 w-full">
      <div className="px-6 pt-5 pb-2 flex items-center justify-between">
        <p className="text-lg font-semibold text-slate-700">Active Users</p>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-medium">
          {total} Total
        </span>
      </div>
      <div className="h-72 w-full px-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={105}
              innerRadius={48}
              stroke="#fff"
              paddingAngle={1}
              startAngle={90}
              endAngle={450}
              isAnimationActive
              label={({ name, percent }) => percent > 0.13 ? `${name}` : ""}
              labelLine={false}
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend data={pieData} colors={COLORS} />
    </div>
  );
}
