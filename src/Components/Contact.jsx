import { useEffect, useRef } from "react";
const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
        name: form[0].value,
        email: form[1].value,
        message: form[2].value,
    };

    try {
        const res = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        alert(result.message);
        form.reset();
    } catch (err) {
        console.error("Error:", err);
        alert("Failed to send message.");
    }
};


const Contact = () => {
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
        <div
            className="contact-page d-flex flex-column w-100 "
            ref={sectionRef}
        >
            {/* Main Content Section */}
            <div className="flex-grow-1 d-flex align-items-center justify-content-center py-4 w-100">
                <div className="container p-4 animate-on-scroll" style={{ maxWidth: "600px" }}>
                    <h1
                        className="text-center mb-3 fw-bold text-danger typing-heading"
                        style={{ fontFamily: "Imprint MT Shadow" }}
                    >
                        Contact Me
                    </h1>
                    <p className="text-center mb-3">
                        Have a question? Leave your details, and I will get back to you as soon as possible.
                    </p>

                    {/* Form Section */}
                    <form className="row g-2 animate-on-scroll form-animation" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="col-12">
                            <input
                                required
                                type="text"
                                className="form-control bg-transparent text-light"
                                placeholder="Name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="col-12">
                            <input
                                required
                                type="email"
                                className="form-control bg-transparent text-light"
                                placeholder="Email"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="col-12">
                            <textarea
                                required
                                className="form-control bg-transparent text-light"
                                placeholder="Message"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 text-center mt-2">
                            <button type="submit" className="btn btn-outline-danger btn-lg" >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="py-2 text-light animate-on-scroll">
                <div className="container d-flex align-items-center justify-content-center">
                    <a href="https://github.com/praptii07" target="_blank" rel="noopener noreferrer">
                        <img
                            src={"github-logo.png"}
                            alt="GitHub Logo"
                            className="img-fluid"
                            style={{ width: "50px", height: "50px" }}
                        />
                    </a>
                </div>
                <div className="container d-flex align-items-center justify-content-center">
                    <p style={{ fontSize: "smaller", marginBottom: 0 }}>Prapti Singh @2025</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
