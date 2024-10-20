import React from 'react';
import './CardBodyd.css'; // Import styles for the card

const CardBodyd = ({ course }) => {
  const { course_title,creator_youtube_link, description, creator_name, creator_image, course_image } = course;
  console.log(course)
  return (
    <div className="card">
      <img src={course_image} alt={course_title} className="course-image" />
      <div className="card-content">
        <h3 className="course-title">
          {course_title.length > 30 ? `${course_title.slice(0, 30)}...` : course_title}
        </h3>
        <div className="creator-info">
          <img src={creator_image} alt={creator_name} className="creator-image" />
          <a className="creator-name" href={creator_youtube_link} >{creator_name}</a>
        </div>
          <a href={creator_youtube_link} className='youtube-link' target='_blank' >Visit Now </a>
      </div>
    </div>
  );
};

export default CardBodyd;
