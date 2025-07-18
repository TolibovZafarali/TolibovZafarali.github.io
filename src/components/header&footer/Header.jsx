import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="main-header animate-from-top">
        <div className="left-title">Software Developer</div>

        <div className="full-name-wrapper">
          <NavLink
            to="/"
            className="full-name"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Zafarali Tolibov
          </NavLink>
        </div>

        <div className="topnav">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

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
