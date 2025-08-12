'use client';

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
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

export default function Home() {
  const [cardsDrawn, setCardsDrawn] = useState<TarotCard[]>([]);

  const drawCards = () => {
    // Barajar tarotCards
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    setCardsDrawn(shuffledCards.slice(0, 3));  // 3 primeras cartas
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-0 gap-16 sm:p-20"> 
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <NavBar />
        <h1 className="text-3xl sm:text-4xl font-bold text-center">Descubre tu Destino con Cata</h1>
        <p className="text-lg sm:text-xl text-center mb-8">
          Haz clic en el botón para recibir tu lectura de tarot.
        </p>

        <button
          onClick={drawCards}
          className="bg-[#ff6347] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#e05337] transition-colors"
        >
          ¡Tira las cartas!
        </button>

        {cardsDrawn.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-6">Tu lectura de tarot:</h2>
            <div className="flex gap-8 justify-center flex-wrap">
              {cardsDrawn.map((card, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={150}
                    height={250}
                    className="rounded-lg"
                  />
                  <p className="mt-2 font-medium">{card.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}