import { useState } from "react";
import StockHeader from "./StockHeader";
import StockChart from "./StockChart";
import MarketStats from "./MarketStats";

const timeframes = ["1D", "1W", "1M", "6M", "1Y"];

function Dashboard({ company }) {
  const [timeframe, setTimeframe] = useState("1M");

  const chartData =
  company.history[timeframe] || company.history["1M"];

  return (
    <main className="flex min-w-0 flex-1 flex-col bg-slate-950">
      <StockHeader company={company} />

      <section className="flex-1 p-6 lg:p-8">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50">
          {/* Chart Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-slate-800 px-6 py-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-base font-semibold text-white">
                Price History
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Historical stock price
              </p>
            </div>

            {/* Timeframe Selector */}
            <div className="flex rounded-lg border border-slate-800 bg-slate-950 p-1">
              {timeframes.map((range) => {
                const isActive = timeframe === range;

                return (
                  <button
                    key={range}
                    onClick={() => setTimeframe(range)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {range}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chart */}
          <div className="p-6" aria-label={`${company.name} stock price chart`}>
            
          <div
            role="img"
            aria-label={`${company.name} stock price chart for ${timeframe}`}
            >
            <StockChart data={chartData} />
            </div>

  <div className="mt-6">
    <MarketStats company={company} />
    </div>
    </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;