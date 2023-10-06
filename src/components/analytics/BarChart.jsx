import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export default function StatisticsChart({ userData }) {

   const options = {
    responsive: true,
  
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
  
      tooltips: {
        position: "nearest",
        mode: "index",
        intersect: false,
        yPadding: 10,
        xPadding: 10,
        caretSize: 8,
        backgroundColor: "rgba(72, 241, 12, 1)",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 4,
      },
    },
  };
  
  const currentMonth = new Date().getMonth() + 1;
  const labels = Array.from({ length: currentMonth }, (_, i) => i + 1);
  const userDataCounts = userData?.map((entry) => entry.count);
  
   const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: userDataCounts,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
