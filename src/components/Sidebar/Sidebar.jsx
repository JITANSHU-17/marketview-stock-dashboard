import { useState } from "react";
import { BarChart3, Search } from "lucide-react";
import CompanyList from "./CompanyList";

function Sidebar({
  companies,
  selectedSymbol,
  onSelectCompany,
}) {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredCompanies = companies.filter((company) => {
  const search = searchTerm.toLowerCase();

  return (
    company.name.toLowerCase().includes(search) ||
    company.symbol.toLowerCase().includes(search)
  );
});

  return (
    <aside className="flex max-h-[55vh] w-full flex-col border-r border-slate-800 bg-slate-950 lg:h-full lg:max-h-none lg:w-72">
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

        {/* Search */}
        <div className="relative mb-4">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
                type="text"
                placeholder="Search companies..."
                aria-label="Search companies"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                />
        </div>

        {filteredCompanies.length > 0 ? (
  <CompanyList
            companies={filteredCompanies}
            selectedSymbol={selectedSymbol}
            onSelectCompany={onSelectCompany}
        />
        ) : (
        <div className="rounded-lg border border-dashed border-slate-800 px-4 py-8 text-center">
            <p className="text-sm font-medium text-slate-400">
            No companies found
            </p>

            <p className="mt-1 text-xs text-slate-600">
            Try another company or symbol.
            </p>
        </div>
        )}

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