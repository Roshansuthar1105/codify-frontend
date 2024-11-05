import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import CardBody from "../../components/CardBody";
import "../../components/css/Admin.css";
import { useLoading } from "../../components/loadingContext";
function AdminCourses() {
  const { authorizationToken, API, coursesData } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const { setIsLoading } = useLoading();
  const filteredCourses = coursesData
    .filter(course =>
    (course.course_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.course_category.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.creator_name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/admin/courses/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: authorizationToken },
    });
    const data = await response.json();
    if (response.ok) {
      toast.success(data.message);
      window.location.reload();
    } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <div className="admin-courses-header">
        <h2>Total Courses : {filteredCourses.length}</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Link to="/admin/courses/add">Add New Course</Link>
      </div>
      <table className="data-table" >
        <tr>
          <th>No.</th>
          <th>Creator Img</th>
          <th>Creator Name</th>
          <th>Title</th>
          <th>Category</th>
          <th>Image</th>
          <th>Youtube Link</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {filteredCourses.length == 0 ? <tr><td colSpan={10} style={{textAlign: "center"}}>No Courses Found</td></tr> :
        filteredCourses.map((curr, ind) => {
          const { course_image, creator_image, creator_name, creator_youtube_link, course_category, course_title } = curr;
          
          return (
            <tr key={ind} className="hover-card-container" >
              <td>{ind + 1}</td>
              <td><img height={50} width={50} style={{ borderRadius: "50%" }} src={creator_image} alt={creator_name} /></td>
              <td>{creator_name}</td>
              <td>{course_title}</td>
              <td>{course_category}</td>
              <td><img height={"auto"} width={100} src={course_image} alt={course_title} /></td>
              <td><a href={creator_youtube_link} target="_blank" rel="noreferrer">Watch</a></td>
              <td><Link to={`/admin/courses/update/${curr._id}`}>Update</Link></td>
              <td><button onClick={() => handleDelete(curr._id)}>Delete</button></td>
              <td className="hover-card" ><CardBody course={curr} /></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AdminCourses;
