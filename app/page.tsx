import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/ExperienceSection";
import FooterContact from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main >
      <Hero />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <FooterContact />
    </main>
  );
}
