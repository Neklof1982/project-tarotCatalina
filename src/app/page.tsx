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

export default function Home() {
  const [cardsDrawn, setCardsDrawn] = useState<TarotCard[]>([]);

  const drawCards = () => {
    // Barajamos las cartas y tomamos las primeras 3
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    setCardsDrawn(shuffledCards.slice(0, 3));  // Tomamos las primeras 3 cartas
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}