import React from "react";
import Link from "next/link";

interface PageTitleProps {
  title: string;
  message?: string;
}

export default function PageTitle({ title, message }: PageTitleProps) {
  return (
    <div className="dash-header mb-10 p-4 m-4 bg-slate-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-violet-700">{title}</h1>
      <p className="text-gray-600/75 ml-6 dark:text-white-600">{message}</p>
    </div>
  );
}
