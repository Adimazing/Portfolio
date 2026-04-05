import ScrollyCanvas from "@/components/ScrollyCanvas";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import SoftSkills from "@/components/SoftSkills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-main">
      {/* The scrollytelling canvas background section */}
      <ScrollyCanvas />

      {/* Hero with particle canvas overlay */}
      <Hero />

      {/* Content sections */}
      <Profile />
      <Skills />
      <SoftSkills />
      <Education />
      <Experience />
      <Footer />
    </main>
  );
}
