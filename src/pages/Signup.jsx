import React from "react";
import "../components/css/Pages.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
function Signup() {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })
  const [errMessage ,setErrMessage]=useState("");
  const navigate = useNavigate();
  const { storeTokenInLS , API} = useAuth();
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]:value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/v1/auth/register`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      const res_data = await response.json();
      storeTokenInLS(res_data.token);
        if(response.ok){
          toast.success("Registration successfully :)");
          navigate("/");
        }
        else{
        setErrMessage(res_data);
        toast.warn(errMessage.extraDetails ? errMessage.extraDetails:errMessage.message);
        }
    } catch (error) {
      console.log("response error : ", error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName : </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Enter your name"
          value={user.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone No : </label>
        <input
          type="number"
          id="phone"
          name="phone"
          required
          placeholder="Enter your phone"
          value={user.phone}
          onChange={handleChange}
        />
        <label htmlFor="password">password No : </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter your password"
          value={user.password}
          onChange={handleChange}
        />
         {/* {
          errMessage &&
        <p style={{color:"red"}} >{errMessage.extraDetails ? errMessage.extraDetails:errMessage.message}
        </p> */
        }
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
