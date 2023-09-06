import Sidebar from "@/components/Sidebar";
import BarChart from "./components/BarChart";

import "@/styles/globals.css";
import Header from "@/components/Header";
import ProductTable from "./components/ProductTable";

const HomePage = () => {
  return (
    <main className="flex h-screen px-6 py-4 flex-row">
      <Sidebar />
      <div className="w-full h-14">
        <Header title="Product" />
        <BarChart />
        <ProductTable/>
      </div>
    </main>
  );
};

export default HomePage;
