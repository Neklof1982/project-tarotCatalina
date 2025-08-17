import { FaBook, FaBriefcase, FaHome, FaInbox, FaMailBulk, FaPhone, FaUser, FaUsers, FaWrench } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa6';

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <FaBriefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <FaUsers />,
        description: "+200 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <FaWrench />,
        description: "+50 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <FaHome size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <FaUser size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <FaBook size={20} />,
        link: "#lecture",
    },
    {
        id: 4,
        title: "Target",
        icon: <FaComment size={20} />,
        link: "#testimonios",
    },
    {
        id: 5,
        title: "Home",
        icon: <FaMailBulk size={20} />,
        link: "#contact",
    },
];


export const dataSlider = [
    {
        id: 1,
        url: "/images/slider-1.jpg",
    },
    {
        id: 2,
        url: "/images/slider-2.jpg",
    },
    {
        id: 3,
        url: "/images/slider-3.jpg",
    },
    {
        id: 4,
        url: "/images/slider-4.jpg",
    },
]

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+34 677 66 66 33",
        link: "tel:+34677666633",
        icon: <FaPhone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/ratasi",
        link: "github.com/ratasi",
       /* icon: <Code2 />,*/
    },
    {
        id: 3,
        title: "Email",
        subtitle: "email@email.com",
        link: "mailto:test@test.com",
        icon: <FaInbox />,
    },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "Sofía Rivas",
    description:
      "No sabía qué rumbo tomar en mi vida, pero la lectura de cartas con Catalina me dio la claridad que necesitaba para avanzar con confianza y esperanza. ¡Una experiencia mágica e inolvidable!",
    imageUrl: "/images/profile-1.jpg",
  },
  {
    id: 2,
    name: "Lucía Fernández",
    description:
      "La precisión con la que describió mi situación fue impactante. Sentí una conexión muy especial desde el primer momento y su guía iluminó mi camino. ¡Gracias por guiarme con tanta luz!",
    imageUrl: "/images/profile-2.jpg",
  },
  {
    id: 3,
    name: "Andrea López",
    description:
      "Me ayudó a comprender patrones en mi vida que no veía. La lectura fue profunda, empática y muy reveladora, dándome respuestas que necesitaba para seguir creciendo. ¡100% recomendada!",
    imageUrl: "/images/profile-3.jpg",
  },
  {
    id: 4,
    name: "Verónica Díaz",
    description:
      "No solo fue una tirada de cartas, fue una sesión de sanación verdadera. Cata me acompañó con mucha calidez y comprensión. Me sentí escuchada, apoyada y profundamente comprendida.",
    imageUrl: "/images/profile-4.jpg",
  },
  {
    id: 5,
    name: "Camila Torres",
    description:
      "Tenía dudas sobre una relación y gracias a la tirada pude ver la verdad clara. Fue honesta, clara y muy profesional, ayudándome a tomar mejores decisiones. ¡Volveré pronto!",
    imageUrl: "/images/profile-5.jpg",
  },
  {
    id: 6,
    name: "Julieta Morales",
    description:
      "Nunca había probado el tarot y fue una grata sorpresa. La energía fue hermosa y todo lo que me dijo fue muy certero, aportando una guía espiritual que valoro mucho.",
    imageUrl: "/images/profile-6.jpg",
  },
  {
    id: 7,
    name: "Florencia Campos",
    description:
      "Pasaba por un momento difícil y sus palabras me dieron mucha esperanza. La conexión fue instantánea y sentí su sabiduría y empatía en cada palabra que compartió conmigo.",
    imageUrl: "/images/profile-7.jpg",
  },
  {
    id: 8,
    name: "Valentina Suarez",
    description:
      "Me ayudó a tomar una decisión clave en mi vida. Fue clara, intuitiva y muy dulce en su enfoque, una verdadera guía espiritual que me apoyó en ese momento crucial.",
    imageUrl: "/images/profile-8.jpg",
  },
];

