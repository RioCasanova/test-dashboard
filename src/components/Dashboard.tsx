import React, { useState, useEffect } from "react";
import Card from "./Card";
import Reports from "./Reports";

export function Dashboard() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      // Fetch from the Next.js API route
      const res = await fetch("/api/data/cards");
      const data = await res.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <section className="dashboard p-4">
      {/* Two-column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Cards Column */}
        <div className="col-span-1 space-y-4">
          {cards.length > 0 &&
            cards.map((card: { id: string }, index: number) => (
              <Card key={card.id} card={card} index={index} />
            ))}
        </div>
        {/* Reports Chart - Spanning 3 columns */}
        <div className="col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow-lg">
          <Reports />
        </div>
        <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-lg">
          <h4 className="font-bold pb-8">Events</h4>
          <h5>Total Events</h5>
          <p>Here is a list of total events that have taken place through the history of your account</p>
        </div>
        <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-lg">
          <h4 className="font-bold pb-8">Recent Events</h4>
          <p>Here are your recent events</p>
        </div>
      </div>
    </section>
  );
}
