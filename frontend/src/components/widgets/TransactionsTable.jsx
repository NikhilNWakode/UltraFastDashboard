import { FixedSizeList as List } from "react-window";

export default function TransactionsTable({ data, loading }) {
  const statusColor = {
    completed: "bg-green-100 text-green-700 border border-green-200",
    pending: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    failed: "bg-red-100 text-red-700 border border-red-200",
  };

  if (loading)
    return (
      <div className="h-64 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-slate-200 animate-pulse" />
    );

  // Virtualized row
  const Row = ({ index, style }) => {
    const tx = data[index];
    return (
      <div
        style={style}
        className="grid grid-cols-4 items-center px-4 py-3 border-b last:border-none hover:bg-slate-50 transition-all rounded-lg"
      >
        <div className="font-medium">{tx.id}</div>
        <div className="text-slate-600">
          {new Date(tx.date).toLocaleString()}
        </div>
        <div className="font-semibold text-slate-800">₹ {tx.amount}</div>
        <div>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              statusColor[tx.status] || "bg-slate-200 text-slate-700"
            }`}
          >
            {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-200">
      <p className="text-lg font-semibold mb-4 text-slate-800">
        Recent Transactions
      </p>

      {/* Sticky header */}
      <div className="grid grid-cols-4 px-4 py-3 bg-slate-100 text-sm text-slate-700 font-semibold rounded-lg border border-slate-200 sticky top-0 z-10">
        <div>ID</div>
        <div>Date</div>
        <div>Amount</div>
        <div>Status</div>
      </div>

      {/* Virtualized list */}
      <div className="mt-2 rounded-lg overflow-hidden shadow-inner">
        <List
          height={330}
          itemCount={data.length}
          itemSize={54}
          width="100%"
          className="rounded-lg"
        >
          {Row}
        </List>
      </div>
    </div>
  );
}
