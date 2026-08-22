import { BarChart3 } from "lucide-react";
import CompanyList from "./CompanyList";

function Sidebar({
  companies,
  selectedSymbol,
  onSelectCompany,
}) {
  return (
    <aside className="flex h-full w-full flex-col border-r border-slate-800 bg-slate-950 lg:w-72">
      {/* Brand */}
      <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
          <BarChart3 size={20} />
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight">
            MarketView
          </h1>

          <p className="text-xs text-slate-500">
            Stock Dashboard
          </p>
        </div>
      </div>

      {/* Company List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Companies
          </p>
        </div>

        <CompanyList
          companies={companies}
          selectedSymbol={selectedSymbol}
          onSelectCompany={onSelectCompany}
        />
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 px-6 py-4">
        <p className="text-xs text-slate-500">
          Mock market data
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;