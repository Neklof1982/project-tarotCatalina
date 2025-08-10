import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaInstagram, FaFacebookF, FaTiktok, FaPinterestP } from 'react-icons/fa';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Descubre tu destino con Cata",
  description: "Explora las cartas del tarot y encuentra respuestas a tus preguntas más profundas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Aquí iría el contenido principal */}
          <main className="flex-grow">{children}</main>

          <footer className="bg-gray-800 text-white py-8 mt-16">
            {/* Grid de tres columnas */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16 text-center justify-items-center">
              {/* Columna de contacto */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Contacto</h3>
                <p>Mandame un correo</p>
                <p>Horario:</p>
                <p>Lunes - Viernes</p>
                <p>18:00h - 20:00h</p>
              </div>

              {/* Columna sobre mí */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Sobre mí</h3>
                <p>Sobre mi</p>
                <p>Política de Privacidad</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" aria-label="TikTok">
                    <FaTiktok className="text-2xl hover:text-black transition-colors" />
                  </a>
                  <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <FaFacebookF className="text-2xl hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="https://pinterest.com" target="_blank" aria-label="Twitter">
                    <FaPinterestP className="text-2xl hover:text-red-600 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Columna de clases de tarot */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Clases de Tarot</h3>
                <ul className="list-none space-y-1">
                  <li>Introducción al Tarot</li>
                  <li>Lecturas avanzadas</li>
                  <li>El simbolismo de las cartas</li>
                  <li>Curso de interpretación de cartas</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8">
              <p>&copy; 2025 Tarot con Cata. Todos los derechos reservados.</p>
              <p className="mt-2 text-white">
                Diseño y desarrollo por {" "}
                <a
                  href="https://github.com/neklof1982"  // Reemplaza con tu enlace de GitHub
                  target="_blank"
                  className="hover:underline"
                >
                  J.A.R
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
