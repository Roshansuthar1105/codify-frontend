import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "../components/css/Pages.css";
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { useLoading } from "../components/loadingContext";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setIsLoading } = useLoading();
  const [show , setShow]=useState(false);
  const { storeTokenInLS, API,userdata,isLoggedIn } = useAuth();
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
      const response = await fetch(`${API}/api/v1/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log(user, userdata);
        setUser({ email: "", password: "" });
        const res_data = await response.json();
        console.log(res_data.token);
        storeTokenInLS(res_data.token);
        toast.success("logged in SuccesFully");
        window.location.href = "/";
      } else {
        const err_data = await response.json();
        toast.warn(
          err_data.extraDetails ? err_data.extraDetails : err_data.message
          );
        }
      } catch (error) {
        console.log("response error : ", error);
      } finally {
        setIsLoading(false);
      }
    };
  return (
    <div className="container form-page ">
      <div className="gradient-background"></div>
       <div className="page-heading">Login Page</div>
      <div className="left">
        <img src="login.svg" alt="image for signup" />
      </div>
      <div className="right">
      <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit" >Submit</button>
      </form>
      </div>

    </div>
  );
}

export default Login;
