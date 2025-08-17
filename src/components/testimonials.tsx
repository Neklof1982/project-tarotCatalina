import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { dataTestimonials } from "../../data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const Testimonials = () => {
    return (
        <div className="mt-8 mb-6">
            <h2 className="text-3xl font-semibold text-center mb-6" id="testimonios">Testimonios</h2>
            <h3 className="text-xl text-gray-400 text-center mb-6">Review de los clientes </h3>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="mt-16 w-full max-w-3xs mx-auto relative">
                <CarouselContent className="gap-2">
                    {dataTestimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id}
                            className="text-center flex flex-col items-center">
                            {/* AVATAR npx shadcn@latest add avatar*/}
                            <Avatar className="w-20 h-20 sm:w-20 sm:h-20">
                                <AvatarImage src={testimonial.imageUrl} alt="Profile avatar" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="min-h-12 text-2xl mt-4">{testimonial.name}</p>
                                <p>{testimonial.description}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />

            </Carousel>
        </div>
    );
}

export default Testimonials;