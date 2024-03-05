import { DashboardChart } from "./styled";
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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Biểu đồ thống kê số lượng CV trúng tuyển 2023",
    },
  },
};

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

const data = {
  labels,
  datasets: [
    {
      label: "Số lượng CV ứng tuyển",
      data: [10, 42, 35, 78, 60, 90, 32, 57, 58, 32, 32, 77],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Số lượng CV trúng tuyển",
      data: [7, 35, 26, 58, 47, 18, 23, 43, 39, 30, 29, 61],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Chart = () => {
  return (
    <DashboardChart>
      <Bar options={options} data={data} />
    </DashboardChart>
  );
};

export default Chart;
