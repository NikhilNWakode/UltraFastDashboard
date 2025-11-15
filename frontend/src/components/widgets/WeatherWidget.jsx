export default function WeatherWidget({ value, loading }) {
  // Basic icon selection by weather "cond" (customize further as needed)
  const icons = {
    "Clear": "☀️",
    "Sunny": "☀️",
    "Clouds": "☁️",
    "Rain": "🌧️",
    "Thunderstorm": "⛈️",
    "Snow": "❄️",
    "Drizzle": "🌦️",
    "Mist": "🌫️",
    "Haze": "🌫️",
    "Fog": "🌫️",
  };
  const icon = icons[value?.cond] || "🌡️";

  if (loading)
    return (
      <div className="p-5 rounded-xl bg-white shadow border border-slate-200 animate-pulse h-32" />
    );

  return (
    <div className="p-5 rounded-xl bg-white shadow border border-slate-200 h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        
        <p className="text-slate-500 text-sm font-medium">Weather</p>
      </div>
      <h2 className="text-xl font-semibold text-slate-900">{value?.city ?? "--"}</h2>
      <p className="text-lg text-slate-700 mt-1">
        {value?.temp !== undefined ? `${value.temp}°C` : "--"}
        {value?.cond && <> &ndash; <span className="capitalize">{value.cond}</span></>}
      </p>
    </div>
  );
}
