"use client";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import Header from "@/components/Header";
import CartCard from "./components/CartCard";
import useGetDetailCart from "@/hooks/useGetDetailCart";

const DetailCartPage = ({ id }: { id: string }) => {
  const { data, user } = useGetDetailCart(id);

  return (
    <main className="flex h-screen w-full px-6 py-4 flex-row">
      <Sidebar />
      <div className="w-full h-14">
        <Header title="Cart Detail" />
        <CartCard data={data} user={user} />
      </div>
    </main>
  );
};

export default DetailCartPage;
