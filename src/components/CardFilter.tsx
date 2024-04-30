import React, { useState } from "react";
import Link from "next/link";

export default function CardFilter({
  filterChange,
}: {
  filterChange: (value: string) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="filter">
      <Link href="#" className="icon relative" onClick={handleDropdown}>
        <i className="fa fa-ellipsis-h"></i>
      </Link>
      {dropdownOpen && ( // This line adds the conditional rendering
        <ul className="absolute w-48 bg-white shadow-lg mt-2 rounded-md dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="p-2 text-gray-700 text-left dropdown-header">
            <h6>Filter</h6>
          </li>
          <li>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filterChange("Today");
                handleDropdown(); // This will close the dropdown after a selection
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dropdown-item"
            >
              Today
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filterChange("This Month");
                handleDropdown(); // This will close the dropdown after a selection
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item"
            >
              This Month
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filterChange("This Year");
                handleDropdown(); // This will close the dropdown after a selection
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item"
            >
              This Year
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
