import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import CourseForm from "./CourseForm";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import CardBody from "../../components/CardBody";

const CourseUpdate = () => {
    const [newCourse, setNewCourse] = useState({
        course_title:"",
        course_category:"",
        course_image:"",
        creator_name:"",
        creator_image:"",
        creator_youtube_link:""
    });
    const {id} = useParams();
    const {API, authorizationToken} = useAuth();
    const getOneCourse = async () => {
        const response = await fetch(`${API}/admin/courses/getcourse/${id}`, {
            headers: { Authorization: authorizationToken },
        });
        const data = await response.json();
        setNewCourse(data);
    }
    const handleChange = (e) => {
        setNewCourse({...newCourse, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateCourse(newCourse);
    }
    const updateCourse = async (newCourse) => {
        const response = await fetch(`${API}/admin/courses/update/${id}`, {
            method: "PATCH",
            headers: { 
                Authorization: authorizationToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCourse),
        });
        const data = await response.json();
        console.log("data from update course",data ,"coures : ",newCourse);
        
        if(response.ok){
            toast.success(data.message);
        }else{
            toast.error(data.message);
        }
    }
    useEffect(()=>{
        getOneCourse();
    },[])
    return (
        <>
        <div>CourseUpdate</div>
            <CourseForm handleSubmit={handleSubmit} handleChange={handleChange} newCourse={newCourse}/>
            <CardBody course={newCourse}/>
        </>
    )
}

export default CourseUpdate;