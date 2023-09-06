"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CartsTable from "./components/CartsTable";
import { useState } from "react";
const CartPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className="flex h-screen px-6 py-4 flex-row">
      <Sidebar showSidebar={sidebar} />
      <div className="w-full h-14">
        <Header setSidebar={setSidebar} title="Cart" />
        <CartsTable />
      </div>
    </main>
  );
};

export default CartPage;
