import React from "react";
import { Navigate, Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import {useAuth} from "../store/auth"
import { toast } from "react-toastify";
function AdminLayout() {
  const {userdata ,loading} = useAuth();
  if(loading)return <h1>loading...</h1>
  if(!userdata.isAdmin){
    return <Navigate to="/" />
  }
  return ( 
    <>
      <nav>
        <ol>
          <li>
            <NavLink to="/admin/users">
              {" "}
              <FaUser /> users{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/contacts"> contacts </NavLink>
          </li>
          <li>
            <NavLink to="/admin/courses"> courses </NavLink>
          </li>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome /> home{" "}
            </NavLink>
          </li>
        </ol>
      </nav>
      <Outlet />
    </>
  );
}

export default AdminLayout;
