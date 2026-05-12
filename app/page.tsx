import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Publication from "./components/Publication";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Publication />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
