import React, { useState, useEffect } from "react";
import CardFilter from "./CardFilter";
import ReportCharts from "./ReportCharts";

export default function Reports() {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };
  return (
    <div className="bg-white border border-gray-200 md:p-4 rounded-lg shadow-lg chart-card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="md:p-4">
        <h5 className="text-lg font-semibold md:mb-2 md:ms-0 md:mt-0 ms-4 mt-4">
          Reports <span className="text-gray-500 text-sm">/ {filter}</span>
        </h5>
        <ReportCharts />
      </div>
    </div>
  );
}
