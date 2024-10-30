import { BiCloudLightRain } from "react-icons/bi";
import { useAuth } from "../store/auth";
import "./AddNewCourse.css";
import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import CourseForm from "./CourseForm";
const AddNewCourse = () => {
    const {API , coursesData , authorizationToken} = useAuth();
    const [newCourse, setNewCourse] = useState({
        course_category: "",
        creator_name: "",
        course_title: "",
        creator_image: "",
        course_image: "",
        creator_youtube_link: "",
        description: "",
    });
    const handleChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/admin/courses/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken
                },
                body: JSON.stringify(newCourse)
            });

            if (!response.ok) {
                console.log(response);   
                
                throw new Error('Failed to add course');
            }

            const data = await response.json();
            // toast.success(data.message);
            console.log(data.message);
            // Reset form
            setNewCourse({
                course_category: "",
                creator_name: "",
                course_title: "",
                creator_image: "",
                course_image: "",
                creator_youtube_link: "",
                description: "",
            });

            // You might want to show a success message to the user
            toast.success('Course added successfully!');
            
        } catch (error) {
            console.error('Error adding course:', error);
            toast.error('Failed to add course. Please try again.');
        }
    }
    return (
        <>
            <h2 className="page-heading">Add New Course</h2>
            <CourseForm handleSubmit={handleSubmit} handleChange={handleChange} newCourse={newCourse}/>
        </>
    )
}

export default AddNewCourse;