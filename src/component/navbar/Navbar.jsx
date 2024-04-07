import { useState } from "react";
import logo from "../../assets/images/Group 2.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom py-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show bottom-shadow" : ""} justify-content-end `}>
          <ul className={`navbar-nav ml-auto ${isOpen ? " py-4 " : ""}`}>
            <li className="nav-item text-center text-lg-start">
              <Link className="nav-link" to="newtask">
                New Task
              </Link>
            </li>
            <li className="nav-item text-center text-lg-start">
              <Link className="nav-link" to="alltask">
                All Task
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



