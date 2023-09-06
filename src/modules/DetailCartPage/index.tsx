"use client";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import Header from "@/components/Header";
import CartCard from "./components/CartCard";
import useGetDetailCart from "@/hooks/useGetDetailCart";
import { useState } from "react";

const DetailCartPage = ({ id }: { id: string }) => {
  const { data, user } = useGetDetailCart(id);
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className="flex h-screen w-full px-6 py-4 flex-row ">
      <Sidebar showSidebar={sidebar} />
      <div className="w-full h-14">
        <Header setSidebar={setSidebar} title="Cart Detail" />
        <CartCard data={data} user={user} />
      </div>
    </main>
  );
};

export default DetailCartPage;
