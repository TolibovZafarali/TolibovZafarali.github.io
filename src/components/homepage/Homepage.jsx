import { useEffect, useState } from "react";
import Header from "../header&footer/Header";
import backgroundImage from "../../assets/art-background.webp";
import "./Homepage.css";

const Homepage = () => {
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;
  
      const scrollTop = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = heroSection.offsetHeight;
  
      if (scrollTop <= fadeStart) {
        setOverlayOpacity(0);
      } else if (scrollTop >= fadeEnd) {
        setOverlayOpacity(1);
      } else {
        const progress = (scrollTop - fadeStart) / (fadeEnd - fadeStart);
        setOverlayOpacity(progress);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className="home-page">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      <div
        className="background-dark-overlay"
        style={{
          opacity: overlayOpacity,
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <main className="hero-main">
          <h1>FULL-STACK</h1>
          <h1>DEVELOPER</h1>
        </main>

        <div className="hero-bio">
          <p>
            Hey, I'm <span className="highlight">Zafarali Tolibov</span> — but you can call me <span className="highlight">Ali</span>.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section id="projects" className="full-screen-section">
        <h2>Projects</h2>
      </section>

      <section id="resume" className="full-screen-section">
        <h2>Resume</h2>
      </section>

      <section id="contact" className="full-screen-section">
        <h2>Contact</h2>
      </section>
    </div>
  );
};

export default Homepage;
