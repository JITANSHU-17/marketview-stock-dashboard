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
            className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition ${
              isSelected
                ? "bg-blue-600/15 ring-1 ring-blue-500/30"
                : "hover:bg-slate-800"
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