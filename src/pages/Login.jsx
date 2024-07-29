import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "../components/css/Pages.css";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errMessage ,setErrMessage]=useState("");
  const navigate = useNavigate();
  const { storeTokenInLS , API } = useAuth();
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
      const response = await fetch(
        `${API}/api/v1/auth/login`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        setUser({ email: "", password: "" });
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        toast.success("logged in SuccesFully");
        navigate("/");
      } else {
        const err_data = await response.json();
        toast.warn(err_data.extraDetails ? err_data.extraDetails:err_data.message);
      }
    } catch (error) {
      console.log("response error : ", error);
    }

  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
        {
          errMessage &&
        <p style={{color:"red"}} >{errMessage.extraDetails ? errMessage.extraDetails:errMessage.message}
        </p>
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
