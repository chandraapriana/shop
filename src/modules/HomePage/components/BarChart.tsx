"use client";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  maintainAspectRatio: false,
  aspectRatio: 1,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Total items by product",
      data: [1, 2, 3, 4, 5],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function BarChart() {
  const { data } = useGetAllProducts();

  const chartData = useMemo(() => {
    return {
      labels: data?.map((product) => product.title),
      datasets: [
        {
          label: "Total items by product",
          data: data?.map((product) => product.stock),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }, [data]);

  return (
    <div className="bg-white p-2 rounded-2xl shadow-xl w-[700px] h-[300px]">
      <Bar options={options} data={chartData} width={"100%"} height={"100%"} />
    </div>
  );
}
