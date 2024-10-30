import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
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
      console.table(data[0]);
    } else {
      toast(data.message);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
/*
  {
  course_category: "MERN Stack",
  course_image: "https://i.ytimg.com/vi/ktjafK4SgWM/hq720.jpg?sqp=-oaymwEcCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGFAEgKuwyg=&rs=AOn4CLD2I_HeHBBpd3wds8QdW46k7KoQIQ",
  course_title: "Learn the MERN Stack - Full Tutorial for Beginners",
  creator_image: "https://yt3.ggpht.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s88-c-k-c0x00ffffff-no-rj",
  creator_name: "Clever Programmer",
  creator_youtube_link: "https://www.youtube.com/watch?v=ktjafK4SgWM",
  description: "Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)",
  _id: "66a749d80f3aa6f2b2ff4e81"
}
  */
  const handleDelete = async (id) => {
    const response = await fetch(`${API}/admin/courses/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: authorizationToken },
    });
    const data = await response.json();
    if(response.ok){
      toast.success(data.message);
      fetchCourses();
    }else{
      toast.error(data.message);
    }
  }
  return (
    <div>
      <div className="admin-courses-header">
      <h2>Total Courses : {courses.length}</h2>
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
        {courses.map((curr, ind) => {
          const { course_image,creator_image, creator_name,creator_youtube_link,course_category, course_title } = curr;
          return (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td><img height={50} width={50} style={{borderRadius:"50%"}}  src={creator_image} alt={creator_name} /></td>
              <td>{creator_name}</td>
              <td>{course_title}</td>
              <td>{course_category}</td>
              <td><img height={"auto"} width={100} src={course_image} alt={course_title} /></td>
              <td><a href={creator_youtube_link} target="_blank" rel="noreferrer">Watch</a></td>
              <td><Link to={`/admin/courses/update/${curr._id}`}>Update</Link></td>
              <td><button onClick={()=>handleDelete(curr._id)}>Delete</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AdminCourses;
