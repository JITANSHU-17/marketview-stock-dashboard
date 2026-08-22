import { companies } from "./data/stocks";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const selectedCompany = companies[0];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white lg:flex-row">
      <div className="w-full lg:h-screen lg:w-72 lg:shrink-0">
        <Sidebar companies={companies} />
      </div>

      <div className="flex min-w-0 flex-1">
        <Dashboard company={selectedCompany} />
      </div>
    </div>
  );
}

export default App;