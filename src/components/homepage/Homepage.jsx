import Header from "../header&footer/Header";
import backgroundImage from "../../assets/art-background.webp";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="home-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Header />
            <main className="hero-main">
                <h1>FULL-STACK</h1>
                <h1>DEVELOPER</h1>
            </main>
        </div>
    );
}

export default Homepage;
