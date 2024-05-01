import React, { useState } from "react";
import CardFilter from "./CardFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ card }: { card: any }) {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg info-card sales-card pb-2 max-w-md md:col-span-1">
      <div className="p-5">
        <CardFilter filterChange={handleFilterChange} />
        <h5 className="text-lg font-semibold">
          {card.name} <span className="text-gray-500 text-sm">| {filter}</span>
        </h5>
        <div className="flex items-center mt-4">
          <div
            className={`iconContainer p-2 bg-gradient-to-b from-violet-200 to-violet-50 bg-violet-100 rounded-full mr-3`}
          >
            <i className={card.icon} style={{ color: "#6d28d9" }}></i>
          </div>
          <div className="ps-3">
            <h6 className="font-semibold">
              {card.name === "Revenue"
                ? "$" + card.amount.toLocaleString("en-US")
                : card.amount.toLocaleString("en-US")}
            </h6>
            <span
              className={`${
                card.percentage > 0 ? "text-green-500" : "text-red-500"
              } text-sm font-bold`}
            >
              {card.percentage > 0
                ? "+" + card.percentage * 100
                : card.percentage * 100}
              %
            </span>
            <span className="text-gray-500 text-sm">
              {card.percentage > 0 ? " increase" : " decrease"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
