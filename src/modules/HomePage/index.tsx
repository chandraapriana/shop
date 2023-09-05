import Sidebar from "@/components/Sidebar";
import BarChart from "./components/BarChart";
import "@/styles/globals.css";

const HomePage = () => {
  return (
    <main className="flex h-screen px-6 py-4 flex-row">
      <Sidebar />
      <BarChart />
    </main>
  );
};

export default HomePage;
