import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ReportCharts() {
  const [data, setData] = useState({
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 82, 74, 42, 59, 68, 74],
      },
      {
        name: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 46, 33, 50, 47],
      },
      {
        name: "Customers",
        data: [15, 11, 32, 18, 9, 24, 20, 11, 14, 10],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area" as const,
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#6d28d9", "#34d399", "#f87171"],
      fill: {
        type: "gradient" as const,
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth" as const,
      },
      //   title: {
      //     text: "Performance",
      //     align: "left",
      //   },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        type: "datetime" as const,
        categories: [
          "2021-09-27T00:00:00.000Z",
          "2021-09-28T00:00:00.000Z",
          "2021-09-29T00:00:00.000Z",
          "2021-09-30T00:00:00.000Z",
          "2021-10-01T00:00:00.000Z",
          "2021-10-02T00:00:00.000Z",
          "2021-10-03T00:00:00.000Z",
          "2021-10-04T00:00:00.000Z",
          "2021-10-05T00:00:00.000Z",
          "2021-10-06T00:00:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type} // Cast the type to ApexChart
      height={data.options.chart.height}
    />
  );
}
