// PageTitle.tsx

import React from "react";

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="bg-white p-2 md:p-4 rounded shadow mb-4 border-b border-gray-200">
      <h1 className="text-md md:text-lg text-gray-800">{title}</h1>
    </div>
  );
}
