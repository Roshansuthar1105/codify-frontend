import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { RiCloseLargeLine , RiMenu3Fill } from "react-icons/ri";
function NavBar() {
  const { isLoggedIn } = useAuth();
  const { userdata } = useAuth();
  function resp() {
    if(window.innerWidth>1400){
      document.querySelector(".open").style.display="none";
      document.getElementById("nav").classList.remove("side-nav");
    }else{
      document.querySelector(".open").style.display="flex";
      document.getElementById("nav").classList.add("side-nav");
    }
  }
  window.addEventListener("resize",()=>{
    resp();
  })
  const handleClose = ()=>{
    document.getElementById("nav").classList.toggle('show');
  }
  return (
      <nav >
        <h3 className="logo" >Bitwise Learning</h3>
        <span className="open" onClick={handleClose} ><RiMenu3Fill /> </span>
        <ul id="nav" >
        <li>
            <span className="close" onClick={handleClose} ><RiCloseLargeLine /> </span>
          </li>
          <li>
            <NavLink className="link" to="/">Home</NavLink>
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
              {userdata.isAdmin &&  (
                <li>
                  <NavLink className="link" to="/admin">
                    Admin Pannel
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
