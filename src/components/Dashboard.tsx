import React, { useState, useEffect } from "react";
import Card from "./Card";
import Reports from "./Reports";

export function Dashboard() {
  const [cards, setCards] = useState([]);

  const fetchCard = async () => {
    try {
      const res = await fetch("http://localhost:4000/cards");
      const data = await res.json();
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <section className="dashboard">
      <div className="w-full p-2 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Cards will stack in a single column on small screens and spread across four columns on medium and larger screens */}
        {cards.length > 0 &&
          cards.map((card: { id: string }) => (
            <Card key={card.id} card={card} />
          ))}
        {/* Reports takes up full width below the cards on all screens, adjusts from col-start-1 to col-end-5 on medium screens */}
        <div className="w-full col-span-1 md:col-start-1 md:col-end-5">
          <Reports />
        </div>
      </div>
    </section>
  );
}
