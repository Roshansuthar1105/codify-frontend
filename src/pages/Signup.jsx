import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/v1/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      storeTokenInLS(res_data.token);
      if (response.ok) {
        toast.success("Registration successfully :)");
        navigate("/");
      } else {
        setErrMessage(res_data);
        toast.warn(
          errMessage.extraDetails ? errMessage.extraDetails : errMessage.message
        );
      }
    } catch (error) {
      console.log("response error : ", error);
    }
  };
  return (
    <div className="container form-page ">
      <div className="page-heading">Registration Page</div>
      <div className="left">
        <img src="signup.svg" alt="image for signup" />
      </div>
      <div className="right">
        <form className="register form" onSubmit={handleSubmit}>
          <div className="inputs">
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
          </div>
          <div className="inputs">
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
          </div>

          <div className="inputs">
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
          </div>

          <div className="inputs">
            <label htmlFor="password">password : </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
            />
            <div
              id="show"
              onClick={() => {
                password.type =
                  password.type == "password" ? "text" : "password";
                console.log(show);
                show.innerHTML = show.innerHTML == "show" ? "hide" : "show";
              }}
            >
              show
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
