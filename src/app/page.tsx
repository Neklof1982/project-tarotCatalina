import NavBar from "@/components/navbar";
import Introduction from "@/components/introduction";
import DrawCards from "@/components/draw-cards";
import AboutMe from "@/components/about-me";
import Lectures from "@/components/lectures";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-0 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center">
        <NavBar />
        <Introduction />
        <DrawCards />
        <AboutMe />
        <Lectures />
        <Testimonials />
        <Contact />
      </main >
    </div >
  );
}




