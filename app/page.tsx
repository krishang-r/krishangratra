import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/ExperienceSection";
import FooterContact from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <FooterContact />
    </main>
  );
}
