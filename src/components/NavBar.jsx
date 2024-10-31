import React, { useState, useEffect, useRef } from "react";
// import "../App.css";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";
import ThemeSwitcher from "./ThemeSwitcher";
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
      <h3 className="logo">
        <NavLink to="/"> <img src="favicon.png" height={"auto"} width={40} alt="Logo Codify" /> Codify</NavLink>
      </h3>
      <div className="nav-btns" >
      <ThemeSwitcher/>
      <span className="open" id="open" onClick={toggleMenu}>
        <RiMenu3Fill />
      </span>
      </div>
      <ul
        id="nav"
        onClick={toggleMenu}
        className={isMenuOpen ? "side-nav show" : "side-nav"}
      >
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
          <NavLink className="link" to="/roadmap">
            Roadmaps
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
              <NavLink
                to="/dashboard"
                onClick={toggleMenu}
                className="link"
              >
                Dashboard
              </NavLink>
            </li>
            {userdata.isAdmin && (
              <li>
                <NavLink className="link" to="/admin">Admin Panel</NavLink>
              </li>
            )}
            <li>
              <NavLink className="link" to="/logout">
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login" className="link" >Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="link" >Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;

// src/components/NavBar.jsx
// import React, { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../store/auth';
// import './css/Navbar.css'; // Import your CSS styles
// import { RiCloseLargeLine, RiMenu3Fill } from 'react-icons/ri';

// const NavBar = () => {
//   const { isLoggedIn, LogoutUser, userdata } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = () => {
//     LogoutUser();
//     navigate('/login'); // Redirect to login after logout
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 1024);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <h1>Codify</h1>
//         {isMobile ? (
//           <button onClick={toggleMenu} className="menu-toggle">
//             {isMenuOpen ? <RiCloseLargeLine /> : <RiMenu3Fill />}
//           </button>
//         ) : null}
//       </div>
//       {(isMenuOpen || !isMobile) && (
//         <ul className="navbar-links">
//           <li>
//             <NavLink to="/courses" onClick={toggleMenu}>
//               Courses
//             </NavLink>
//           </li>
//           {isLoggedIn ? (
//             <>
//               <li>
//                 <NavLink to={userdata.isAdmin ? '/admin' : '/dashboard'} onClick={toggleMenu}>
//                   Dashboard
//                 </NavLink>
//               </li>
//               <li>
//                 <button onClick={handleLogout}>Logout</button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink to="/login" onClick={toggleMenu}>
//                   Login
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/signup" onClick={toggleMenu}>
//                   Signup
//                 </NavLink>
//               </li>
//             </>
//           )}
//           {userdata.isAdmin && (
//             <li>
//               <NavLink to="/admin" onClick={toggleMenu}>
//                 Admin Panel
//               </NavLink>
//             </li>
//           )}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
