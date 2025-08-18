'use client';

import { useState } from "react";
import Image from "next/image";

import NavBar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Card from "@/components/card";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

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
      <main className="flex flex-col gap-[32px] items-center">
        <NavBar />
        <Introduction />
        <h2 className="text-lg sm:text-3xl font-bold text-center">Déjate guiar por las cartas con Cata</h2>
        <p className="text-lg text-gray-400 sm:text-xl text-center mb-8">
          Haz clic en el botón para recibir tu lectura de tarot.
        </p>

        <button
          onClick={drawCards}
          className="py-3 px-8 rounded-full text-lg font-semibold text-white relative overflow-hidden bg-gradient-to-r from-[#f0c27b] via-[#f0c27b] to-[#4b1248] hover:from-[#4b1248] hover:via-[#4b1248] hover:to-[#f0c27b] transition-all duration-500 dark:from-[#f0c27b] dark:to-[#4b1248]"
        >
          ¡Tira las cartas!
        </button>

        {cardsDrawn.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-center mb-6">Tu lectura de tarot:</h2>
            <div className="flex gap-8 justify-center flex-wrap">
              {cardsDrawn.map((card) => (
                <div key={card.name} className="text-center sm:w-1/3 md:w-1/4 lg:w-1/4">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={175}
                    height={250}
                    className="rounded-lg"
                  />
                  <p className="mt-2 font-medium text-center">{card.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <AboutMe />
        <div className="-mt-6">
          <h2 className="text-3xl font-semibold text-center mb-6" id="lecture">Lecturas</h2>
          <h3 className="text-xl text-gray-400 text-center">Cada lectura es única</h3>
        </div>
        <div className="mt-1 flex gap-8 flex-wrap justify-center">
          <div id="lectura-general">
            <Card title="Lectura General" description="¿No sabes por dónde empezar? Esta tirada te da una visión clara 
                    de lo que está pasando en tu vida, cubriendo amor, trabajo y bienestar. 
                    ¡Perfecta para obtener una perspectiva completa!" active
            />
          </div>
          <div id="lectura-amor">
            <Card title="Lectura de Amor o Relaciones" description="¿Dudas sobre tu relación o el amor en tu vida? 
                    Con esta lectura descubrirás qué está pasando en tu mundo emocional, qué está bloqueando tu felicidad 
                    y cómo mejorar tus conexiones personales." active
            />
          </div>
          <div id="lectura-decision">
            <Card title="Lectura de Decisiones o Elección" description="¿Tienes que tomar una gran decisión? 
                    Esta tirada te ayuda a ver las opciones disponibles y qué resultados podrías esperar, 
                    para que puedas elegir con confianza el camino correcto." active
            />
          </div>
          <div id="lectura-ppf">
            <Card title="Lectura de Pasado, Presente y Futuro" description="Esta lectura te conecta con tu historia personal: 
                    lo que has vivido, lo que está pasando ahora y lo que está por venir. 
                    Perfecta para comprender cómo tu pasado está influenciando el presente y lo que puedes esperar." active
            />
          </div>
        </div>
        <Testimonials />
        <Contact />
      </main >
    </div >
  );
}


