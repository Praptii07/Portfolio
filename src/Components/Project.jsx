import { useEffect, useRef, useState } from "react";

const Project = () => {
    const [projects] = useState([
        {
            title: "BoardBattle",
            description: "Board Battle is an engaging online platform designed for chess enthusiasts and strategic thinkers. This website offers an immersive experience where users can play chess, improve their skills, and compete with friends or other players in real-time.",
            image: "BoardBattle.webp",
            liveLink: "https://github.com/praptii07/BoardBattle",
            learnLink: "https://github.com/praptii07/BoardBattle",
            backgroundColor: "#6c63ff",
        },
        {
            title: "DevTask",
            description: "DevTask is a productivity-focused website tailored for developers and project managers. It offers seamless task management, collaboration, and project tracking to help streamline workflows and maximize productivity.",
            image: "DevTask.webp",
            liveLink: "https://praptidevtask.netlify.app/",
            learnLink: "https://github.com/praptii07/DevTask",
            backgroundColor: "#4CAF50",
        },
        {
            title: "StudentHub",
            description: "StudentHub is a responsive ReactJS web application designed for managing student data with ease. Styled using Bootstrap, it features course-based filtering, a student addition form (available after Google login), and public access to the student list. It includes Google Authentication with a logout option and user name display, offering both functionality and a clean user experience.",
            image: "StudentHub.webp",
            liveLink: "https://student-hub-07.vercel.app/",
            learnLink: "https://github.com/Praptii07/StudentHub",
            backgroundColor: "#ff6347",
        },
        {
            title: "Snake Game",
            description: "This Snake game is a classic arcade-style game where the player controls a growing snake that moves in four directions, starting when any key is pressed. The objective is to collect food, which appears randomly on the board, to increase the snake’s length while avoiding collisions with the walls and itself.",
            image: "Snake.webp",
            liveLink: "https://snake-game-07.vercel.app/",
            learnLink: "https://github.com/Praptii07/Snake-Game",
            backgroundColor: "#d19d18",
        },
    ]);

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current.querySelectorAll(".animate-on-scroll");
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-vh-100 d-flex flex-column  w-100 project-section px-3 px-md-5 " ref={sectionRef}>
            {/* Top Heading */}
            <div className="text-center pt-5 d-flex align-items-center justify-content-center">
                <h1 className="text-danger fw-bold  typing-heading">Projects</h1>
            </div>

            {/* Main Content */}
            <div className="container my-5 flex-grow-1">
                {projects.map((project, index) => (
                    <div
                        className={`row my-5 align-items-center animate-on-scroll ${
                            index % 2 === 0 ? "from-left" : "from-right"
                        }`}
                        key={index}
                    >
                        {/* Project Image */}
                        <div
                            className={`col-12 col-lg-6 mb-4 mb-lg-0 ${
                                index % 2 === 0 ? "order-1 order-lg-1" : "order-1 order-lg-2"
                            }`}
                        >
                            <div
                                className="project-box shadow-lg p-3 h-100 d-flex justify-content-center align-items-center"
                                style={{ backgroundColor: project.backgroundColor }}
                            >
                                <div className="inner-box text-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image img-fluid rounded"
                                        style={{ maxHeight: "300px", objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Project Content */}
                        <div
                            className={`col-12 col-lg-6 ${
                                index % 2 === 0 ? "order-2 order-lg-2" : "order-2 order-lg-1"
                            }`}
                        >
                            <div className="text-center text-lg-start px-2">
                                <h3 className="fw-bold text-danger">{project.title}</h3>
                                <p className="text-secondary">{project.description}</p>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <p className="underline">Live App</p>
                                </a>
                                <a href={project.learnLink} target="_blank" rel="noopener noreferrer">
                                    <p className="underline">Learn More</p>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
