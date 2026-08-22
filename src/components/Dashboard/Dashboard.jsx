import StockHeader from "./StockHeader";

function Dashboard({ company }) {
  return (
    <main className="flex min-w-0 flex-1 flex-col bg-slate-950">
      <StockHeader company={company} />

      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <p className="text-lg font-medium text-slate-300">
            Stock chart coming next
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Interactive price visualization will be added
            in the next phase.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;