import React, { useState, useEffect } from "react";

interface DashboardProps {
  children: React.ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row"></div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
}
