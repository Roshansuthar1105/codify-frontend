import { useAuth } from "../../store/auth";

const CourseForm = ({handleSubmit,handleChange,newCourse}) => {
    const {coursesData} = useAuth();    
    return (
        <>
        <form className="add-course-form form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="center">
                    <div className="left-side">
                        <div className="inputs">
                            <label htmlFor="course_category">Course Category</label>
                            <input
                                type="text"
                                name="course_category" 
                                id="course_category"
                                placeholder="Enter course category"
                                className="input"
                                list="course_category_list"
                                required
                                value={newCourse.course_category}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                            <datalist id="course_category_list">
                                { coursesData && [...new Set(coursesData.map(course => course.course_category))].map((category)=>(
                                    <option value={category} key={category}>{category}</option>
                                ))}
                            </datalist>
                        </div>

                        <div className="inputs">
                            <label htmlFor="creator_name">Creator Name</label>
                            <input
                                type="text"
                                name="creator_name"
                                id="creator_name"
                                placeholder="Enter creator name"
                                required
                                value={newCourse.creator_name}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>

                        <div className="inputs">
                            <label htmlFor="course_title">Course Title</label>
                            <input
                                type="text"
                                name="course_title"
                                id="course_title"
                                placeholder="Enter course title"
                                required
                                value={newCourse.course_title}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="inputs">
                            <label htmlFor="creator_image">Creator Image URL</label>
                            <input
                                type="url"
                                name="creator_image"
                                id="creator_image"
                                placeholder="Enter creator image URL"
                                required
                                value={newCourse.creator_image}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="right-side">

                        <div className="inputs">
                            <label htmlFor="course_image">Course Image URL</label>
                            <input
                                type="url"
                                name="course_image"
                                id="course_image"
                                placeholder="Enter course image URL"
                                required
                                value={newCourse.course_image}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>

                        <div className="inputs">
                            <label htmlFor="creator_youtube_link">Course Link</label>
                            <input
                                type="url"
                                name="creator_youtube_link"
                                id="creator_youtube_link"
                                placeholder="Enter course YouTube link"
                                required
                                value={newCourse.creator_youtube_link}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>

                        <div className="inputs">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Enter course description"
                                required
                                rows="4"
                                value={newCourse.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn">Add Course</button>
            </form>
        </>
    )
}

export default CourseForm;