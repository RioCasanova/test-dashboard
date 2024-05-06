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
            cards.map((card: { id: string }) => (
              <Card key={card.id} card={card} />
            ))}
        </div>
        {/* Reports Chart - Spanning 3 columns */}
        <div className="col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Items Statistics</h2>
          <Reports />
        </div>
      </div>
    </section>
  );
}
