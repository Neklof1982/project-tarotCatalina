import Card from "@/components/card";

const Lectures = () => {
  return (
    <>
      <div className="-mt-6">
        <h2 className="text-3xl font-semibold text-center mb-6" id="lecture">Lecturas</h2>
        <h3 className="text-xl text-gray-400 text-center">Cada lectura es única</h3>
      </div>
      <div className="mt-1 flex gap-8 flex-wrap justify-center">
        <div id="lectura-general">
          <Card
            title="Lectura General"
            description="¿No sabes por dónde empezar? Esta tirada te da una visión clara 
            de lo que está pasando en tu vida, cubriendo amor, trabajo y bienestar. 
            ¡Perfecta para obtener una perspectiva completa!"
            active
          />
        </div>
        <div id="lectura-amor">
          <Card
            title="Lectura de Amor o Relaciones"
            description="¿Dudas sobre tu relación o el amor en tu vida? 
            Con esta lectura descubrirás qué está pasando en tu mundo emocional, qué está bloqueando tu felicidad 
            y cómo mejorar tus conexiones personales."
            active
          />
        </div>
        <div id="lectura-decision">
          <Card
            title="Lectura de Decisiones o Elección"
            description="¿Tienes que tomar una gran decisión? 
            Esta tirada te ayuda a ver las opciones disponibles y qué resultados podrías esperar, 
            para que puedas elegir con confianza el camino correcto."
            active
          />
        </div>
        <div id="lectura-ppf">
          <Card
            title="Lectura de Pasado, Presente y Futuro"
            description="Esta lectura te conecta con tu historia personal: 
            lo que has vivido, lo que está pasando ahora y lo que está por venir. 
            Perfecta para comprender cómo tu pasado está influenciando el presente y lo que puedes esperar."
            active
          />
        </div>
      </div>
    </>
  );
};

export default Lectures;