function MarketStats({ company }) {
  const stats = [
    {
      label: "Market Cap",
      value: company.marketCap,
    },
    {
      label: "Volume",
      value: company.volume,
    },
    {
      label: "52W High",
      value: `$${company.high52.toFixed(2)}`,
    },
    {
      label: "52W Low",
      value: `$${company.low52.toFixed(2)}`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-slate-800 bg-slate-900/50 p-4"
        >
          <p className="text-xs font-medium text-slate-500">
            {stat.label}
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MarketStats;