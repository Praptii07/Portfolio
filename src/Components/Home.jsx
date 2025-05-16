const Home = () => {
    const handleScroll = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center w-100 ">
            <div className="container text-center text-white">
                <div className="row align-items-center">
                    <div className="col-12 col-md-10 mx-auto">
                        <h2 className="display-4 mb-3 text-shadow fade-in-up">
                            Hello, I am <span className="text-danger fw-bold">Prapti.</span>
                        </h2>
                        <h3 className="mb-4 text-shadow fade-in-up" style={{ animationDelay: "0.5s" }}>
                            I am a Web Developer
                        </h3>
                        <button
                            className="btn btn-outline-danger btn-lg fade-in-up"
                            style={{ animationDelay: "1s" }}
                            onClick={handleScroll}
                        >
                            View My Work ⬇
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
