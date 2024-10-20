import React, { useEffect, useState } from "react";
import "../components/css/Course.css";
import { useAuth } from "../store/auth.jsx";
import { toast } from "react-toastify";
import CardBody from "../components/CardBody.js"
// import { MdFavoriteBorder } from "react-icons/md";
function Courses() {
  const { coursesData } = useAuth();
  const { loading } = useAuth();
  let categoryArray=[];
  coursesData.map((c)=>{
    const a  =categoryArray.indexOf(c.course_category);
    if(a==-1){
      categoryArray.push(c.course_category);
    }
  });
  // console.log(categoryArray);
  function demo() {
    // Sample array of objects
const courses =coursesData;
  // const makeDiv = CardBody;
// Step 1: Group objects based on course_category
const groupedCourses = courses.reduce((acc, obj) => {
  const category = obj.course_category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(obj);
  return acc;
}, {});
// Step 2: Convert object into an array of arrays
const result = Object.values(groupedCourses);
return result;
}

const loadRecourses = ()=>{
  const courses = demo();
  const page = document.getElementById('courses-page');
  const category = document.getElementById('courses_category');
  courses.map((current , ind )=>{
    const div = document.createElement('div');
    div.classList.add('course-container');
    const cat = current[0].course_category;
    div.classList.add(cat.replaceAll(" ","-"));
    const heading = document.createElement('h2');
    heading.innerText = cat;
    console.log(heading,category);
    heading.classList.add('course-heading');
    category.appendChild(heading);
    div.appendChild(heading);
    for (let i = 0; i < current.length; i++) {
      const element = current[i];
      div.appendChild(CardBody(element));
    }
    page.appendChild(div);
  })
}
useEffect(()=>{
  loadRecourses();
})
  return (
    <>
      <div id="courses-page" className="container courses-page ">
      <div className="gradient-background"></div>
        <div id="courses_category"></div>
      </div>
    </>
  );
}

export default Courses;
