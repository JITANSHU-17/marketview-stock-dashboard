function CompanyList({ companies }) {
  return (
    <div className="space-y-1">
      {companies.map((company) => (
        <button
          key={company.symbol}
          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition hover:bg-slate-800"
        >
          <div>
            <p className="text-sm font-medium text-slate-200">
              {company.name}
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              {company.symbol}
            </p>
          </div>

          <span
            className={`text-xs font-medium ${
              company.changePercent >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {company.changePercent >= 0 ? "+" : ""}
            {company.changePercent}%
          </span>
        </button>
      ))}
    </div>
  );
}

export default CompanyList;
