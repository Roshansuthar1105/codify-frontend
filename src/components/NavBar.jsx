import React, { useState, useEffect, useRef } from "react";
// import "../App.css";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";
function NavBar() {
  const { isLoggedIn, userdata } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
 const nav = useRef();
  // Function to handle resizing the window
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Updated to 1024px
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <h3 className="logo"> <NavLink to="/">Codify</NavLink></h3>
      <span className="open" id="open" onClick={toggleMenu}>
        <RiMenu3Fill />
      </span>
      <ul id="nav" onClick={toggleMenu} className={isMenuOpen ? "side-nav show" : "side-nav"}>
        <li>
          <span className="close" id="close" onClick={toggleMenu}>
            <RiCloseLargeLine />
          </span>
        </li>
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact">
            Contact Us
          </NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink className="link" to="/logout">
                Logout
              </NavLink>
            </li>
            {userdata.isAdmin && (
              <li>
                <NavLink className="link" to="/admin">
                  Admin Panel
                </NavLink>
              </li>
            )}
          </>
        ) : (
          <>
            <li>
              <NavLink className="link" to="/signup">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
