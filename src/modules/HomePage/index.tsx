"use client";
import Sidebar from "@/components/Sidebar";
import BarChart from "./components/BarChart";

import "@/styles/globals.css";
import Header from "@/components/Header";
import ProductTable from "./components/ProductTable";
import { useState } from "react";

const HomePage = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className="flex h-screen px-6 py-4 flex-row w-full">
      <Sidebar showSidebar={sidebar} />
      <div className="w-full flex-shrink-1">
        <Header setSidebar={setSidebar} title="Product" />
        <BarChart />
        <ProductTable />
      </div>
    </main>
  );
};

export default HomePage;
