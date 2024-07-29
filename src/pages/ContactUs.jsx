import React from "react";
import { useState } from "react";
import { useAuth } from "../store/auth";
import "../components/css/Pages.css";
import { toast } from "react-toastify";
function ContactUs() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    message: "",
  });
  const {userdata , API}=useAuth();
  const {isLoggedIn}=useAuth();
  const [isUser , setisUser]=useState(true);
  if(isUser && userdata){
    setUser({
      email:userdata.email,
      username:userdata.username,
      message:""
    })
    setisUser(false);
  }
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
        `${API}/contact`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      const data = await response.json()
      if(data.extraDetails){
        toast.error(data.extraDetails);
      }else{
        toast.success("Message sent successfully");
        setUser({
          ...user,
          message:""
        })
      }
    } catch (error) {
      console.log("message not sent: ", error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username : </label>
        <input
          type="username"
          id="username"
          name="username"
          required
          placeholder="Enter your username"
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
        <label htmlFor="message">message : </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Enter your message"
          value={user.message}
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;