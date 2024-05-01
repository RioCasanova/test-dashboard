import React, { useState, useEffect } from "react";
import CardFilter from "./CardFilter";
import ReportCharts from "./ReportCharts";

export default function Reports() {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };
  return (
    <div className="bg-white mt-5 border border-gray-200 p-4 rounded-lg shadow-lg chart-card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">
          Reports <span className="text-gray-500 text-sm">/ {filter}</span>
        </h5>
        <ReportCharts />
      </div>
    </div>
  );
}
