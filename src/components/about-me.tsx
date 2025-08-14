import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { dataSlider } from "../../data";


const AboutMe = () => {
    return (
        <div>
            <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
                <h2 className="text-3xl font-semibold text-center mb-6">Sobre mí</h2>
                <h3 className="text-xl text-gray-400 text-center">Conóceme</h3>
                <div className="grid md:grid-cols-2">
                    <div className="py-12 md:py-0 flex items-center justify-cneter">
                        <div className="py-12 md:py-0 flex items-center justify-center">
                            {/* CAROUSEL npx shadcn@latest add carousel */}
                            <Carousel opts={{
                                align: "start"
                            }}
                            orientation="vertical"
                            className="m-full max-w-xs h-fit"
                            >
                                <CarouselContent className="-mt-1 h-[250px]">
                                    {dataSlider.map((data) => (
                                        <CarouselItem key={data.id}>
                                            <div className="flex items-center justify-center">
                                                <Image src={data.url} alt="Image" width={400} height={400} className="w-full h-auto rounded-4xl" />
                                            </div>
                                        </CarouselItem>
                                    )
                                )}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            {/* <Image src="/images/slider-1.jpg" alt="Profile pic" width={400} height={400} className="rounded-4xl" /> */}
                        </div>
                    </div>
                    <p className="my-8 text-justify">
                        Soy una tarotista que encuentra su inspiración en la conexión profunda con las cartas y los
                        mensajes que el universo tiene para ofrecer. Cuando no estoy leyendo el tarot, disfruto de la
                        serenidad de la meditación y el contacto con la naturaleza, ya que creo que la paz interior es
                        clave para una visión clara y profunda. Además, soy una buscadora constante de sabiduría, y los
                        libros son una fuente continua de conocimiento espiritual y crecimiento personal. A través de las
                        redes sociales, comparto mi amor por el tarot, creando contenido que inspira a otros a explorar
                        su propio camino espiritual y descubrir las respuestas que buscan en su vida.
                        Como amante de los gatos, siento una profunda conexión con sus energías misteriosas y su
                        intuición natural. Los gatos, con su serenidad y su capacidad de moverse entre los mundos, me
                        enseñan a confiar en mis propios instintos, los gatos nos invitan a ver más allá de lo visible.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;