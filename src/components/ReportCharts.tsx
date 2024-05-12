import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ReportCharts() {
  // Initialize state for screen-dependent chart height
  const [chartHeight, setChartHeight] = useState(350);

  useEffect(() => {
    // Function to update chart height based on window width
    function handleResize() {
      if (window.innerWidth < 768) {
        // Adjust this breakpoint as needed
        setChartHeight(200); // Smaller height for smaller screens
      } else {
        setChartHeight(350); // Default height for larger screens
      }
    }

    // Set initial size and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [data, setData] = useState({
    series: [
      {
        name: "Total Items",
        data: [31, 40, 28, 51, 42, 82, 74, 42, 59, 68],
      },
      {
        name: "Total Pending Items",
        data: [11, 32, 45, 32, 34, 52, 46, 33, 50, 47],
      },
      {
        name: "Total Global Items",
        data: [15, 11, 32, 18, 9, 24, 20, 11, 14, 10],
      },
    ],
    options: {
      chart: {
        height: chartHeight, // Dynamically set the height based on screen size
        type: "area" as const,
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#2874EC", "#3C7191", "#0B215B"],
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
        curve: "straight" as const,
      },
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
    <div className="chart-container mr-4 md:mr-0">
      <Chart
        options={data.options}
        series={data.series}
        type={data.options.chart.type} // Cast the type to ApexChart
        height={data.options.chart.height}
      />
    </div>
  );
}
