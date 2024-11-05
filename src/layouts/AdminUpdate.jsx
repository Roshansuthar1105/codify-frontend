import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useLoading } from "../components/loadingContext";
function AdminUpdate() {
  const { setIsLoading } = useLoading();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { authorizationToken, API } = useAuth();
  const params = useParams();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const fetchUserdata = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser({
          email: data.email,
          username: data.username,
          phone: data.phone,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUserdata();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        toast.success("User Updated successfully");
      } else {
        toast.error("User not updated");
      }
      const data = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container update-cont">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
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
          <label htmlFor="phone">mobile : </label>
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
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default AdminUpdate;
