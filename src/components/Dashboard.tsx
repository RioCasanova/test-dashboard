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
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/3 w-full p-2">
          <div className="flex flex-wrap">
            {cards.length > 0 &&
              cards.map((card: { id: string }) => (
                <Card key={card.id} card={card} />
              ))}
            <div className="w-full p2">
              <Reports />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full"></div>
      </div>
    </section>
  );
}
