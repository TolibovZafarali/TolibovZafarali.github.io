import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResumePreview, setShowResumePreview] = useState(false);


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
          <button
              className="resume-link"
              onClick={() => {
                setMenuOpen(false);
                setShowResumePreview(true);
              }}
              >
              Resume
            </button>
            <a href="mailto:zafaralit67@gmail.com" className="contact-link">Contact</a>
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
        <button
              className="resume-link-phone"
              onClick={() => {
                setMenuOpen(false);
                setShowResumePreview(true);
              }}
              >
              Resume
            </button>
            <a
                href="mailto:zafarali@example.com"
                className="contact-link"
                onClick={() => setMenuOpen(false)}
              >
                Contact
            </a>

        <div className="social-icons">
          <a href="https://github.com/TolibovZafarali" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/zafarali-tolibov" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {showResumePreview && (
        <div className="resume-overlay" onClick={() => setShowResumePreview(false)}>
          <div className="resume-preview" onClick={(e) => e.stopPropagation()}>
            
              <button
                className="close-preview"
                onClick={() => setShowResumePreview(false)}
              >
                ×
              </button>
            
            <iframe
              src={resume}
              title="Resume Preview"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
       </div>
      )}
    </>
  );
};

export default Header;
