import NavBar from '@/components/navbar';
import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto" id="privacy">
      <NavBar />
      <h1 className="text-3xl font-bold text-[#4b1248] mb-6">Política de Privacidad</h1>

      <p className="mb-4">
        En Tarot con Cata nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Información que recopilamos</h2>
      <p className="mb-4">
        Podemos recopilar tu nombre, correo electrónico y mensaje cuando rellenas nuestro formulario de contacto. Esta información solo se utiliza para responder a tus solicitudes.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Uso de la información</h2>
      <p className="mb-4">
        No compartimos, vendemos ni cedemos tus datos personales a terceros. Usamos la información exclusivamente para proporcionarte un mejor servicio.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Derechos del usuario</h2>
      <ul className="list-disc pl-6">
        <li>Acceder a tus datos personales</li>
        <li>Solicitar la corrección o eliminación</li>
        <li>Oponerte al tratamiento de tus datos</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Contacto</h2>
      <p className="mb-4">
        Si tienes preguntas sobre esta política, puedes escribirnos a través del formulario de contacto.
      </p>
    </div>
  );
};

export default PrivacyPage;