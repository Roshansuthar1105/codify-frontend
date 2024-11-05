import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import CourseForm from "./CourseForm";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import CardBody from "../../components/CardBody";
import { useLoading } from "../../components/loadingContext";
import "../../components/css/CourseUpdate.css";
const CourseUpdate = () => {
    const { setIsLoading } = useLoading();
    const [preview, setPreview] = useState(false);
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
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/admin/courses/getcourse/${id}`, {
                headers: { Authorization: authorizationToken },
            });
            const data = await response.json();
            setNewCourse(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    const handleChange = (e) => {
        setNewCourse({...newCourse, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateCourse(newCourse);
    }
    const updateCourse = async (newCourse) => {
        try {
            setIsLoading(true);
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
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        getOneCourse();
    },[])
    return (
        <>
            <h2 className="page-heading">Update <span style={{color: "var(--bg_buttons)"}}>Course</span></h2>
            <button className="preview-btn" onClick={()=>{
                setPreview(!preview);
            }} >Preview</button>
            <CourseForm handleSubmit={handleSubmit} handleChange={handleChange} newCourse={newCourse}/>
            {preview && 
            <div className="preview-container">
                <button className="close-preview-btn" onClick={()=>{
                    setPreview(false);
                }} >Close</button>
                <CardBody course={newCourse}/>
            </div>}
        </>
    )
}

export default CourseUpdate;