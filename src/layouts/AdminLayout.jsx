import React from "react";
import { Navigate, Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";
import {useAuth} from "../store/auth"
import { toast } from "react-toastify";
function AdminLayout() {
  const {userdata} = useAuth();
  if(!userdata.isAdmin){
    return <Navigate to="/" />
  }
  return ( 
    <>
    <div className="admin-cont container" >
    <div className="gradient-background"></div>
      <div className="left" >
        <ul className="admin-nav">
          <li>
            <NavLink to="/admin/users">
              <FaUser /> <span>users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/contacts"><MdFeedback /> <span>Feedbacks</span></NavLink>
          </li>
          <li>
            <NavLink to="/admin/courses"><BiSolidBook /><span>courses</span> </NavLink>
          </li>
          {/* <li>
            <NavLink to="/">
              <FaHome /> <span>home</span>
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="right">
      <Outlet />
      </div>
    </div>
    </>
  );
}

export default AdminLayout;
