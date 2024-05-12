import React from "react";

interface CardProps {
  card: any;
  index: number; // Index of this card in the list
}

export default function Card({ card, index }: CardProps) {
  // Assign background color based on the card's index
  const backgroundColors = ["#2874EC", "#3C7191", "#0B215B"];
  const cardColor =
    index < backgroundColors.length ? backgroundColors[index] : "#ffffff";

  // Convert percentage to a displayed number
  const displayedValue = Math.round(card.percentage * 100);

  return (
    <div
      className="p-8  shadow-lg text-white"
      style={{ backgroundColor: cardColor }}
    >
      {/* Card Value and Title */}
      <h2 className="text-2xl mb-2">{displayedValue}</h2>
      <p className="text-xl font-light">{card.name}</p>
    </div>
  );
}
