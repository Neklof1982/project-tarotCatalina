'use client';

import { useState } from "react";
import Image from "next/image";

interface TarotCard {
  name: string;
  image: string;
}

const tarotCards: TarotCard[] = [
  { name: "La Muerte", image: "/images/card1.jpg" },
  { name: "El Diablo", image: "/images/card2.jpg" },
  { name: "La estrella", image: "/images/card3.jpg" },
  { name: "La Rueda de la Fortuna", image: "/images/card4.jpg" },
  { name: "Los Amantes", image: "/images/card5.jpg" },
  { name: "El Mago", image: "/images/card6.jpg" },
];

const DrawCards = () => {
  const [cardsDrawn, setCardsDrawn] = useState<TarotCard[]>([]);

  const drawCards = () => {
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    setCardsDrawn(shuffledCards.slice(0, 3));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Déjate guiar por las cartas con Cata
      </h2>
      <p className="text-xl text-gray-400 text-center mb-10">
        Haz clic en el botón para recibir tu lectura de tarot.
      </p>

      <div className="flex justify-center mb-12">
        <button
          onClick={drawCards}
          className="py-3 px-8 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#f0c27b] via-[#f0c27b] to-[#4b1248] hover:from-[#4b1248] hover:via-[#4b1248] hover:to-[#f0c27b] transition-all duration-500"
        >
          ¡Tira las cartas!
        </button>
      </div>

      {cardsDrawn.length > 0 && (
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8">
            Tu lectura de tarot:
          </h3>
          <div className="flex gap-8 justify-center flex-wrap">
            {cardsDrawn.map((card) => (
              <div
                key={card.name}
                className="text-center sm:w-1/3 md:w-1/4 lg:w-1/4"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  width={175}
                  height={250}
                  className="rounded-lg"
                />
                <p className="mt-2 font-medium">{card.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawCards;