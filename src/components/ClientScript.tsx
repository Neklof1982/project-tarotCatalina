"use client";

import { useEffect } from "react";

const ClientScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []); // Solo se ejecuta al montar el componente

  return null; //  nada visualmente
};

export default ClientScript;