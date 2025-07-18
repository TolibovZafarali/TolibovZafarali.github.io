import Footer from "../header&footer/Footer";
import Header from "../header&footer/Header";
import alphaPiLogo from "../../assets/transparent.svg";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="wrapper">
            
            <div 
                className="background-image"
                style={{
                    backgroundColor: 'black',
                }}
            />

            <Header />
                <main className="projects-content">
                    <div className="alpha-pi-project">
                        <div className="alpha-pi-description">
                            <a href="https://alpha-pi.netlify.app/">
                                <img src={alphaPiLogo} alt="Alpha Pi Project" className="alpha-pi-logo"/>
                            </a>
                    </div>
                </div>
                </main>
            <Footer />
        </div>
    );
}
 
export default Projects;