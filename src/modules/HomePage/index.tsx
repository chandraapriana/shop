import Sidebar from "@/components/Sidebar"
import BarChart from "./components/BarChart"

const HomePage = () => {
  return (
    <main className="flex h-screen flex-row" >
      <Sidebar/>
      <BarChart/>
    </main>
  )
}

export default HomePage