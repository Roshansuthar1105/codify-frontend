import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useLoading } from "../components/loadingContext";
function AdminUsers() {
  const { authorizationToken, API } = useAuth();
  const { setIsLoading } = useLoading();
  const [users, setUsers] = useState([]);
  const fetchAllUsers = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete ?")) {
      try {
        setIsLoading(true);
        const response = await fetch(`${API}/admin/users/delete/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken
          }
        });
        if (response.ok) {
          const data = await response.json();
          toast.success(data.message);
          fetchAllUsers();
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <table className="data-table">
        <tr>
          <th></th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        {users.map((curr, ind) => {
          const { username, email, _id, phone } = curr;
          return (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <button>
                  <Link to={`/admin/users/${_id}/edit`}><MdOutlineEdit /> edit </Link>
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(_id)}><MdDeleteOutline /> delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default AdminUsers;
