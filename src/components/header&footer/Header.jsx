import { useState } from "react";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="left-title">Software Developer</div>

        <div className="full-name-wrapper">
        <a
          href="#!"
          className="full-name"
          onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Zafarali Tolibov
        </a>


        </div>


        <div className="topnav">
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <div className="backdrop" onClick={() => setMenuOpen(false)}></div>
      )}

      <div className={`side-drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <div className="social-icons">
          <a href="https://github.com/TolibovZafarali" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/zafarali-tolibov" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
