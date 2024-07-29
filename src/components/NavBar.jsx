import React from "react";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
function NavBar() {
  const { isLoggedIn } = useAuth();
  // const { userdata } = useAuth();
  return (
    <header>
      <nav>
        <h3>User Registration </h3>
        <ul>
          <li>
            <NavLink className="link" to="/">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              {" "}
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/courses">
              {" "}
              Courses{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact">
              {" "}
              Contact Us{" "}
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <NavLink className="link" to="/logout">
                  Logout
                </NavLink>
              </li>
              {/* {userdata.isAdmin &&  (
                <li>
                  <NavLink className="link" to="/admin">
                    Admin Pannel
                  </NavLink>
                </li>
              )} */}
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
    </header>
  );
}

export default NavBar;
