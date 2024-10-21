import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth.jsx';
import CardBodyd from './CardBodyd';
import SearchBard from './Searchbard.jsx'; // Import the SearchBar component
import './css/Courses.css'; // Include your CSS styles here

const CoursesList = () => {
  const { coursesData } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const uniqueCategories = [...new Set(coursesData.map(course => course.course_category))];
    setCategories(uniqueCategories);
  }, [coursesData]);

  // Filter courses based on the selected category and search term
  const filteredCourses = coursesData
    .filter(course => 
      (selectedCategory ? course.course_category === selectedCategory : true) &&
      (course.course_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       course.course_description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="courses-list">
      <h2>All Courses</h2>
      <SearchBard searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
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
          <div className="no-courses">No courses found matching your search.</div>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
