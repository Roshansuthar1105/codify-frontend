import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import CardBody from '../components/CardBody';
import "../components/css/Dashboard.css";
function Dashboard() {
  const { userdata, API } = useAuth();
  const [watchlist, setWatchlist] = useState([]);
  const token = localStorage.getItem('token');

  // Fetch user's watchlist
  const fetchWatchlist = async () => {
    const response = await fetch(`${API}/user/watchlist`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add the Authorization header
      },
    });

    if (response.ok) {
      const data = await response.json();
      setWatchlist(data.watchlist || []); // Set to an empty array if watchlist is undefined
      console.log("Watchlist data is ", data.watchlist || []);
    } else {
      console.error('Failed to fetch watchlist:', response.status, response.statusText);
    }
  };

  useEffect(() => {
    fetchWatchlist(); // Fetch the watchlist when component mounts
  }, [API, token]);

  // Handle watchlist update in CardBody
  const updateWatchlist = () => {
    fetchWatchlist(); // Re-fetch watchlist to get the latest data
  };

  return (
    <div className="dashboard container">
      <h2 className='page-heading'>{userdata ? `${userdata.username}'s` : "Your"} Dashboard</h2>
      <div className="gradient-background"></div>
      <h3 className='watchlist-heading' >Total Courses - {watchlist.length}</h3>
      <div className="courses">
        {watchlist.length > 0 ? (
          watchlist.map(course => (
            <CardBody key={course._id} course={course} watchlist={watchlist} updateWatchlist={updateWatchlist} />
          ))
        ) : (
          <p>No courses in your watchlist.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
