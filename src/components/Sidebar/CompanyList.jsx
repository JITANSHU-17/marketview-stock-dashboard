function CompanyList({
  companies,
  selectedSymbol,
  onSelectCompany,
}) {
  return (
    <div className="space-y-1">
      {companies.map((company) => {
        const isSelected = company.symbol === selectedSymbol;

        return (
          <button
            key={company.symbol}
            onClick={() => onSelectCompany(company.symbol)}
            className={`group flex w-full items-center justify-between rounded-lg border px-3 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                isSelected
                    ? "border-blue-500/30 bg-blue-500/10"
                    : "border-transparent hover:border-slate-800 hover:bg-slate-900"
                }`}
          >
            <div>
              <p
                className={`text-sm font-medium ${
                  isSelected
                    ? "text-white"
                    : "text-slate-200"
                }`}
              >
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
              {company.changePercent.toFixed(2)}%
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CompanyList;