import { companies } from "./data/stocks";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        MarketView
      </h1>

      <div className="space-y-3">
        {companies.map((company) => (
          <div
            key={company.symbol}
            className="rounded-lg border border-slate-800 p-4"
          >
            <p className="font-semibold">
              {company.name}
            </p>

            <p className="text-slate-400">
              {company.symbol}
            </p>

            <p className="mt-2 text-sm text-slate-400">
  1M data points: {company.history["1M"].length}
</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;