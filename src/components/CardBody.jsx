import React from 'react';
import './css/CardBody.css'; // Import styles for the card
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { MdBookmarkBorder, MdBookmarkAdded, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useLoading } from './loadingContext';
const CardBody = ({ course, watchlist = [], updateWatchlist }) => {
  const { setIsLoading } = useLoading();
  const { course_title, creator_youtube_link, creator_name, creator_image, course_image } = course;
  const { API, userdata } = useAuth();
  const token = localStorage.getItem('token'); // Assuming you store your token in localStorage
  
  const isInWatchlist = watchlist.some(item => item._id === course._id); // Check if course is in watchlist

  const handleWatchlist = async () => {
    if (!userdata._id) {
      toast.info("Not Logged in !");
      setIsLoading(false);
      return; // Prevent further execution if not logged in
    }
    
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/user/addToWatchlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Add the Authorization header
        },
        body: JSON.stringify({ courseId: course._id }),
      });

      if (!response.ok) {
        const errorMessage = await response.text(); // Get the error message
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
      }

      const result = await response.json(); // Handle the response
      console.log("Success:", result); // Optional: Handle success UI update
      toast.success("Watchlist Updated!");
      updateWatchlist(); // Call the function to refresh the watchlist
    } catch (error) {
      console.error("Error:", error); // Handle the error accordingly
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <div className="card">
      <img src={course_image} alt={course_title} className="course-image" />
      <div className="card-content">
        <h3 className="course-title">
          {course_title.length > 30 ? `${course_title.slice(0, 30)}...` : course_title}
        </h3>
        <div className="creator-info">
          <img src={creator_image} alt={creator_name} className="creator-image" />
          <a className="creator-name" href={creator_youtube_link}>{creator_name}</a>
        </div>
        <div className='card-btns' >
          <a href={creator_youtube_link} className='youtube-link' target='_blank' rel="noopener noreferrer">Visit Now</a>
        <button onClick={handleWatchlist} className={`watchlist-button ${isInWatchlist?'added':'add'} `}  >
          {isInWatchlist ? (
            <>
              <MdBookmarkAdded className='list-btns' />
            </>
          ) : (
            <>
              <MdBookmarkBorder className='list-btns' />
            </>
          )}
        </button>
        {userdata.isAdmin && <Link className='edit-btn' to={`/admin/courses/update/${course._id}`} ><MdEdit className='list-btns' /></Link>}
          </div>
      </div>
    </div>
  );
};

export default CardBody;
