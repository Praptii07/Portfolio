const NavBar=()=>{
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top px-4 w-100">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
    )
}
export default NavBar;