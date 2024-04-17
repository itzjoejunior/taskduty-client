import { useState } from "react";
import logo from "../../assets/images/TDlogo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import SignIn from "../../auth/SignIn";
import SingUp from "../../auth/SingUp";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalSignIn, setModalSignIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom py-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show bottom-shadow" : ""
          } justify-content-end `}
        >
          {" "}
          {isLoggedIn ? (
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
          ) : (
            
            <section className="d-flex gap-4 ">

              <section className="d-flex gap-4 ">
              <Link to="/signup" className="btn text-white btn-purple">Sign Up</Link>
              <Link to="/signin" className="btn text-white btn-purple">Sign In</Link>
              </section>

              {/* <div>
                <Button variant="purple"  onClick={() => setModalShow(!modalShow)}>
                  Sign Up
                </Button>

                <SingUp show={modalShow} onHide={() => setModalShow(false)} />
              </div> */}

              {/* SignIn  */}

              {/* <div>
                <Button variant="purple" onClick={() => setModalSignIn(true)}>
                  Sign In
                </Button>

                <SignIn show={modalSignIn} onHide={() => setModalSignIn(false)} />
              </div> */}
            
            </section>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
