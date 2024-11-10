// src/components/Courses.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import SearchBar from '../components/SearchBar';
import CardBody from '../components/CardBody';
import '../components/css/Courses.css';
import { useLoading } from '../components/loadingContext';
const Courses = () => {
  const { fetchCoursesData, coursesData, API } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const token = localStorage.getItem('token');
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    fetchCoursesData();
    setIsLoading(false);
  }, []);
  useEffect(() => {
    // Extract unique categories from coursesData
    setIsLoading(true);
    const uniqueCategories = [...new Set(coursesData.map(course => course.course_category))];
    setCategories(uniqueCategories);
    setIsLoading(false);
  }, [coursesData]);
  // Fetch user's watchlist
  const fetchWatchlist = async () => {
    try {
      setIsLoading(true);
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
    } catch (error) {
      console.error('Error fetching watchlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchlist(); // Fetch the watchlist when component mounts
  }, [API, token]);

  // Handle watchlist update in CardBody
  const updateWatchlist = () => {
    fetchWatchlist(); // Re-fetch watchlist to get the latest data
  };
  // Filter courses based on selected category and search term
  const filteredCourses = coursesData
    .filter(course =>
      (selectedCategory ? course.course_category === selectedCategory : true) &&
      (course.course_title.toLowerCase().includes(searchTerm.toLowerCase())
       || course.description.toLowerCase().includes(searchTerm.toLowerCase())
       || course.creator_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setSelectedCategory(null); // Reset to show all courses
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="courses-page container">
      <div className="gradient-background"></div>
      <h2 className='course-heading page-heading'>{selectedCategory || 'All Courses'}</h2>
      <SearchBar className="searchbar-st" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="categories">
        <button
          className={`category-button ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => handleCategorySelect('All')}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="courses">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CardBody key={course._id} course={course} watchlist={watchlist} updateWatchlist={updateWatchlist} />
          ))
        ) : (
          <div className="card">
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?t=st=1729403294~exp=1729406894~hmac=ec87d355b9eaf1e9d5530b62be453b683494fbbe2bfe9cbde000ce01fe8e1037&w=1060" alt="No Course Found" className="course-image" />
            <div className="card-content">
              <h3 className="course-title">No Courses Found {selectedCategory ? `in ${selectedCategory}` : ''}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
