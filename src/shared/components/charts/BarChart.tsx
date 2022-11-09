import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function BarChart(props:any) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  // const buildData = {
  //   labels: props.chart_data.labels,
  //   datasets: [
  //     {
  //       label: "First dataset",
  //       data: props.chart_data.values,
  //       fill: true,
  //       // backgroundColor: "lightyellow",
  //       borderColor: "yellow",
  //       color: "yellow",
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  // plugins: {
  //   legend: {
  //     position: 'top' as const,
  //   },
  //   title: {
  //     display: true,
  //     text: 'Chart.js Bar Chart',
  //   },
  // },
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
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
          display: false,
          color: "rgba(255, 255, 255, 1)",
        },
        grid: {
          display: false,
          circular: true,
          borderDash: [5, 5],
        },
      },
    },
  };

  const BarData = [
    {
        id: 1,
        label: 2016,
        price: 8000,
        color:'#6B8CEF'
    },
    {
        id: 2,
        label: 2017,
        price: 4567,
        color:'#1A3491'
    },
    {
        id: 3,
        label: 2018,
        price: 7888,
        color:'#1A3491'
    },
    {
        id: 4,
        label: 2019,
        price: 9000,
        color:'#1A3491'
    },
    {
        id: 5,
        label: 2020,
        price: 4300,
        color:'#1A3491'
    },
    {
      id: 6,
      label: 2120,
      price: 3300,
        color:'#1A3491'
  },
  {
    id: 7,
    label: 3020,
    price: 5300,
        color:'#1A3491'
},
{
  id: 8,
  label: 2020,
  price: 2300,
        color:'#1A3491'
},

{
  id: 9,
  label: 3020,
  price: 3300,
        color:'#1A3491'
},
{
  id: 10,
  label: 1020,
  price: 2300,
        color:'#1A3491'
},
{
  id: 11,
  label: 2020,
  price: 6300,
        color:'#6B8CEF'
},
]
  
  const labels = BarData.map(o => o.label);
  
  const data = {
    labels,
    datasets: [
      {
      backgroundColor: BarData.map(o => o.color),
      borderColor: BarData.map(o => o.color),
      // borderWidth: 1,
      data:  BarData.map(o => o.price)
    }
    ],
  };

  return (
    <>
      {/* <div className={`${props.w_percentage == 100 ? "md:w-[100%]" : "md:w-[50%]" } shadow border sm:rounded-lg sm:w-auto`}>
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
        </div> */}
        <div className="pb-4 pt-8 text-gray-900 items-center">
          {/* <Bar
            id="chart"
            height="100%"
            className="h-[50%]"
            data={buildData}
            options={options}
          /> */}
          <Bar options={options} data={data} />
        </div>
      {/* </div> */}
    </>
  );
}

export default BarChart;
