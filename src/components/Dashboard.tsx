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
    <section className="dashboard">
      <div className="w-full p-2 grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.length > 0 &&
          cards.map((card: { id: string }) => (
            <Card key={card.id} card={card} />
          ))}
        <div className="w-full col-span-1 md:col-start-1 md:col-end-5">
          <Reports />
        </div>
      </div>
    </section>
  );
}
