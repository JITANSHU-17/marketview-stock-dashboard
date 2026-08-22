import { TrendingDown, TrendingUp } from "lucide-react";

function StockHeader({ company }) {
  const isPositive = company.changePercent >= 0;

  return (
    <section className="border-b border-slate-800 px-6 py-6 lg:px-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
        {/* Company Information */}
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {company.name}
            </h2>

            <span className="rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-slate-400">
              {company.symbol}
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            {company.sector}
          </p>
        </div>

        {/* Price */}
        <div className="sm:text-right">
          <p className="text-3xl font-bold tracking-tight text-white">
            ${company.price.toFixed(2)}
          </p>

          <div
            className={`mt-1 flex items-center gap-1 text-sm font-medium sm:justify-end ${
              isPositive
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {isPositive ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}

            <span>
              {isPositive ? "+" : ""}
              ${company.change.toFixed(2)}
            </span>

            <span>
              ({isPositive ? "+" : ""}
              {company.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StockHeader;