import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const CartPage = () => {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="w-full h-14">
        <Header title="Cart" />
      </div>
    </main>
  );
};

export default CartPage;
