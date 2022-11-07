import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

function LineChart(props:any) {
    console.clear()
    console.log("🚩 ~ file: Bids.tsx ~ line 4 ~ Bids ~ props", props)
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const buildData = {
    labels: props.chart_data.labels,
    datasets: [
      {
        label: "First dataset",
        data: props.chart_data.values,
        fill: true,
        // backgroundColor: "lightyellow",
        borderColor: "yellow",
        color: "yellow",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },

      xAxes: {
        ticks: {
          color: "rgba(255, 255, 255, 1)",
        },
        grid: {
          circular: true,
          borderColor: "white",
          color: "white",
          borderDash: [5, 5],
        },
      },
    },
    layout: {
      padding: {
        right: 10,
      },
    },
  };

  return (
    <>
      <div className="md:w-[50%] h-[100%] shadow border sm:rounded-lg sm:w-auto">
        <div className="flex justify-between px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 ">Price History</h3>
          <div className="flex justify-around">
            <h3 className="text-sm text-gray-400 font-medium mx-2">All time</h3>
            <h3 className="text-sm font-medium mx-2">Last 6 months</h3>
            <h3 className="text-sm text-gray-400 font-medium mx-2">Month</h3>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="flex px-4 py-5 sm:gap-4 sm:px-6">
              <dt className="text-xs text-gray-500">🟡</dt>
              <dt className="text-xs text-gray-500">All Time Avg. Price</dt>
              <dt className="text-xs text-white">0.3075 ETH</dt>
            </div>
          </dl>
        </div>
        <div className="pb-4 pt-8 text-gray-900 items-center">
          <Line
            id="chart"
            height="100%"
            className="h-[50%]"
            data={buildData}
            options={options}
          />
        </div>
      </div>
    </>
  );
}

export default LineChart;
