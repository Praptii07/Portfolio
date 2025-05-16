import { useState, useEffect } from "react";

const About = () => {
    const [activeItem, setActiveItem] = useState("Home");
    const [animate, setAnimate] = useState(false);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    useEffect(() => {
        const onScroll = () => {
            const about = document.getElementById("about");
            if (about) {
                const top = about.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    setAnimate(true);
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top px-4 w-100">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {["Home", "About", "Projects", "Contact"].map((item) => (
                            <li key={item} className="nav-item">
                                <a
                                    className={`nav-link ${activeItem === item ? "text-danger fw-bold" : ""}`}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => handleItemClick(item)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* About Section */}
            <section
                id="about"
                className="py-5  w-100 text-white"

            >
                <div className="container mt-5 pt-5">
                    <h1 className="fw-bold mb-4 text-danger text-center typing-heading">About Me</h1>

                    <div className="row align-items-center mt-5">
                        {/* Left Section */}
                        <div
                            className={`col-12 col-md-6 text-center text-md-start mb-4 ${
                                animate ? "slide-in-left" : "opacity-0"
                            }`}
                        >
                            <div className="profile-img-container">
                                <div className="image-background"></div>
                                <img
                                    src={"Me.webp"}
                                    alt="Me"
                                    className="rounded-circle shadow-lg"
                                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                                />
                            </div>
                            <p className="fs-5 mt-3">
                                Fully committed to the philosophy of life-long learning, I’m a{" "}
                                <span className="fw-bold text-danger">Front-End Developer</span> with a deep
                                passion for JavaScript, React, and all things web development. The unique
                                combination of creativity, logic, technology, and constant learning drives my
                                excitement for web development.
                            </p>
                        </div>

                        {/* Right Section: Skill Icons in Circle */}
                        <div
                            className={`col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0 ${
                                animate ? "slide-in-right" : "opacity-0"
                            }`}
                        >
                            <div
                                className="outer-circle position-relative rounded-circle shadow-lg"
                                style={{
                                    width: "280px",
                                    height: "280px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                }}
                            >
                                {[
                                    { src: "Html.webp", alt: "HTML", color: "#f06529" },
                                    { src: "Css.webp", alt: "CSS", color: "#2965f1" },
                                    { src: "Js.webp", alt: "JavaScript", color: "#f7df1e" },
                                    { src: "React.webp", alt: "React", color: "#61dafb" },
                                    { src: "Git.webp", alt: "Git", color: "#f05032" },
                                    { src: "Bootstrap.webp", alt: "Bootstrap", color: "#563d7c" },
                                ].map((icon, index) => (
                                    <div
                                        key={index}
                                        className="position-absolute shadow-lg"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            borderRadius: "50%",
                                            border: `3px solid ${icon.color}`,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            overflow: "hidden",
                                            transform: `rotate(${index * 60}deg) translate(110px) rotate(-${
                                                index * 60
                                            }deg)`,
                                        }}
                                    >
                                        <img
                                            src={icon.src}
                                            alt={icon.alt}
                                            style={{ width: "100%", objectFit: "cover", borderRadius: "50%" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
