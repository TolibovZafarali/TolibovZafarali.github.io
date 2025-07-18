import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer animate-from-bottom">
      <div className="footer-social-icons">
        <a href="https://github.com/TolibovZafarali" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/zafarali-tolibov" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer-title">Software Developer</div>
    </footer>
  );
};

export default Footer;
