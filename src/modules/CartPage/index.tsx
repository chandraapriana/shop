import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const CartPage = () => {
  return (
    <main className="flex h-screen px-6 py-4 flex-row">
      <Sidebar />
      <div className="w-full h-14">
        <Header title="Product" />
      </div>
    </main>
  );
};

export default CartPage;
