import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
function AdminUsers() {
  const { authorizationToken ,API} = useAuth();
  const [users, setUsers] = useState([]);
  const fetchAllUsers = async () => {
    try {
      const response = await fetch(`${API}/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  const handleDelete = async (id) => {
    if(confirm("Are you sure to delete ?")){
    try{
      const response = await fetch(`${API}/admin/users/delete/${id}`, {
      method: "DELETE",
      headers:{
        Authorization:authorizationToken
      }
    });
    if(response.ok){
      const data =await response.json();
      toast.success(data.message);
      fetchAllUsers();
    }
    }catch(error){
      console.log(error)
    }}
  };
  return (
    <>
      <table>
        <thead>
          <td>name</td>
          <td>email</td>
          <td>phone</td>
          <td>edit</td>
          <td>delete</td>
        </thead>
        <tbody>
          {users.map((curr, ind) => {
            const { username, email, _id, phone } = curr;
            return (
              <tr style={{ color: "white", backgroundColor: "#222" }} key={ind}>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <button> <Link to={`/admin/users/${_id}/edit`}> edit </Link> </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(_id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default AdminUsers;
