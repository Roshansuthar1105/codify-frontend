import React, { useState, useEffect } from 'react';
import { useAuth } from '../../store/auth.jsx';
import CardBodyd from './CardBodyd';
import SearchBard from './Searchbard.jsx';
import './Courses.css';

const Courses = () => {
  const { coursesData } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    // Extract unique categories from coursesData
    const uniqueCategories = [...new Set(coursesData.map(course => course.course_category))];
    setCategories(uniqueCategories);
  }, [coursesData]);

  // Filter courses based on selected category and search term
  const filteredCourses = coursesData
    .filter(course => 
      (selectedCategory ? course.course_category === selectedCategory : true) &&
      (course.course_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       course.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setSelectedCategory(null); // Reset to show all courses
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="courses-page">
      <h2 className='course-heading' >{selectedCategory || 'All Courses' }</h2>
      <SearchBard searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
            <CardBodyd key={course._id} course={course} />
          ))
        ) : (
          <div className="card">
          <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?t=st=1729403294~exp=1729406894~hmac=ec87d355b9eaf1e9d5530b62be453b683494fbbe2bfe9cbde000ce01fe8e1037&w=1060" alt="No Course Found" className="course-image" />
          <div className="card-content">
            <h3 className="course-title">
              No Courses Found { selectedCategory ? `in ${selectedCategory}`: ''}
            </h3>
          </div>
        </div>
          )}
      </div>
    </div>
  );
};

export default Courses;
