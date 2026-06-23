import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Works from "@/sections/Works";
import About from "@/sections/About";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background paper-grain">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Works />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
