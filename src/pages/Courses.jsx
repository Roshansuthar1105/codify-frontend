import React, { useEffect, useState } from "react";
import "../components/css/Course.css";
import { useAuth } from "../store/auth.jsx";
import { toast } from "react-toastify";
function Courses() {
  const { coursesData } = useAuth();
  const { loading } = useAuth();
  return (
    <>
      <div className="container">
        {loading ? "loading ":"done"}
        {Array.isArray(coursesData) &&
          coursesData.map((curr, index) => {
            const {
              _id,
              course_category,
              course_title,
              creator_name,
              creator_youtube_link,
              creator_image,
              course_image,
              description,
            } = curr;
            return (
              <div className="card-body" key={index}>
                <div className="img-div">
                  <img src={course_image} alt={course_title} />
                </div>
                <div className="creator-div">
                  <img src={creator_image} alt={creator_name} />
                  <div>
                    <p>{course_title}</p>
                    <h6>{creator_name}</h6>
                  </div>
                </div>
                <div className="btn-cont">
                  <a
                    href={creator_youtube_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch now
                  </a>
                  <button
                    className="btn"
                    data-id={_id}
                    data-index={index}
                    // onClick={handleClick}
                  >
                    ❤️
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Courses;
