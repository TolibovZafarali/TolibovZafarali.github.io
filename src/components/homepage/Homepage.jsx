import Header from "../header&footer/Header";
import backgroundImage from "../../assets/tree-dark.svg";
import "./Homepage.css";
import Footer from "../header&footer/Footer";

const Homepage = () => {
  return (
    <div className="home-page">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
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

            My journey into tech started with childhood curiosity. I briefly studied at the <span className="highlight">University of Economics</span>, but rediscovered my passion for technology while learning clunky accounting software.

            That spark pushed me to start coding — first in <span className="highlight">Python</span>, then full-stack development through <span className="highlight">LaunchCode</span>. Today, I’m focused on building clean, intuitive, and powerful web apps with <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">Java</span>, and <span className="highlight">Spring Boot</span>.

            Let’s build something smarter.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
