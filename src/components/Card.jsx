import React from "react";

function Card(props) {
    const {
        _id,
        course_category,
        course_title,
        creator_name,
        creator_youtube_link,
        creator_image,
        course_image,
        description,
      } = props.curr;
      const ind=props.key;
  return (
    <div className="card-body" key={_id}>
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
          data-index={ind}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}

export default Card;
