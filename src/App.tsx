import { useState, useEffect, lazy, Suspense } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LoaderWrapper from "./components/LoaderWrapper";
import Background3D from "./components/Background3D";

const EngineeringHighlights = lazy(
  () => import("./components/EngineeringHighlights"),
);
const Projects = lazy(() => import("./components/Projects"));
const SystemDesign = lazy(() => import("./components/SystemDesign"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "engineering",
        "projects",
        "architecture",
        "about",
        "skills",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LoaderWrapper>
      <SmoothScroll>
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Hero />
        <Background3D />
        <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
          <EngineeringHighlights />
          <Projects />
          <SystemDesign />
          <About />
          <Skills />
          <Certifications />
          <Contact />
        </Suspense>
        <Footer />
      </SmoothScroll>
    </LoaderWrapper>
  );
}

export default App;
