import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CartsTable from "./components/CartsTable";

const CartPage = () => {
  return (
    <main className="flex h-screen px-6 py-4 flex-row">
      <Sidebar />
      <div className="w-full h-14">
        <Header title="Product" />
        <CartsTable />
      </div>
    </main>
  );
};

export default CartPage;
