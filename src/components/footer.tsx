import { FaInstagram, FaFacebookF, FaTiktok, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#4b1248] text-white py-8 mt-0">
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
          <a href='#about-me'>Sobre mi</a>
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
            <li><a href='#lectura-general'>Lectura General</a></li>
            <li><a href='#lectura-amor'>Lectura de Amor o Relaciones</a></li>
            <li><a href='#lectura-decision'>Lectura de Decisiones o Elección</a></li>
            <li><a href='#lectura-ppf'>Lectura de Pasado, Presente y Futuro</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8">
        <p>&copy; 2025 Tarot con Cata. Todos los derechos reservados.</p>
        <p className="mt-2 text-white">
          Diseño y desarrollo por {" "}
          <a
            href="https://github.com/neklof1982"
            target="_blank"
            className="hover:underline"
          >
            J.A.R
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;