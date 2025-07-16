import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                {/* Left side name */}
                <Link to="/" className="full-name">
                    Zafarali Tolibov
                </Link>

                {/* Desktop Nav */}
                <div className="topnav">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>

                {/* Mobile hamburger menu button */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open navigation menu"
                >
                    ☰
                </button>
            </header>

            {/* Overlay backdrop */}
            {menuOpen && (
                <div className="backdrop" onClick={() => setMenuOpen(false)}></div>
            )}

            {/* Mobile side drawer menu */}
            <div className={`side-drawer ${menuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setMenuOpen(false)}>
                    ×
                </button>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/news" onClick={() => setMenuOpen(false)}>News</NavLink>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            
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
