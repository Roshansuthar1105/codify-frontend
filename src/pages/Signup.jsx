import React from "react";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { useLoading } from "../components/loadingContext";
function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [show , setShow]=useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { storeTokenInLS, API } = useAuth();
  const { setIsLoading } = useLoading();
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
      setIsLoading(true);
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
        window.location.href = "/";
        // to refresh the page and navigate to home page
        // navigate("/");
      } else {
        setErrMessage(res_data);
        toast.warn(
          errMessage.extraDetails ? errMessage.extraDetails : errMessage.message
        );
      }
    } catch (error) {
      console.log("response error : ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container form-page register ">
      <div className="gradient-background"></div>
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
                setShow(!show);
              }}
              >{
                show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
              }
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
