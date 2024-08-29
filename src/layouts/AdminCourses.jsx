import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
function AdminCourses() {
  const { authorizationToken, API } = useAuth();
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    const response = await fetch(`${API}/admin/courses`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });
    const data = await response.json();
    if (response.ok) {
      setCourses(data);
    } else {
      toast(data.message);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div>
      <table className="data-table" >
        <tr>
          <th>No.</th>
          <th>Creator</th>
          <th>Title</th>
        </tr>
        {courses.map((curr, ind) => {
          const { creator_name, course_title } = curr;
          return (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{creator_name}</td>
              <td>{course_title}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AdminCourses;
