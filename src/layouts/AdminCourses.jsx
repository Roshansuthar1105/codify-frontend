import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
function AdminCourses() {
  const {authorizationToken, API} =useAuth();
  const [courses , setCourses]=useState([])
  const fetchCourses = async ()=>{
    const response =await fetch(`${API}/admin/courses`,{
      method:"GET",
      headers:{
        Authorization:authorizationToken
      }
    });
    const data =await response.json();
    if(response.ok){
    setCourses(data);
  }else{
      toast(data.message);
    }
  }
  useEffect(()=>{
    fetchCourses();
  },[])
  return (
    <div>
      Courses List : 
      <ol>

      {
        courses.map((curr,ind)=>{
          const { _id,course_title }=curr;
          return(
            <li key={ind} >title : {course_title} , id {_id} </li>
            );
          })
        }
        </ol>
    </div>
  )
}

export default AdminCourses
