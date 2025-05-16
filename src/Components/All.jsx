import Home from "./Home.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";

const All = () => {
    return (
        <div>
            <div id="home" className="section-padding">
                <Home />
            </div>

            <div id="about" >
                <About />
            </div>

            <div id="projects" >
                <Project />
            </div>

            <div id="contact">
                <Contact />
            </div>

        </div>
    );
};

export default All;
