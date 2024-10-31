import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";

const CreatorsContainer = ({count}) => {
    const {coursesData} = useAuth();
    const topCreators = [...new Map(coursesData.map(course => [course.creator_name, course])).values()];

    return (<div className="creators-grid">
        {/* Filter unique creators and map through them */}
        {topCreators.slice(0, count-1).map((course, index) => (
          <div key={index} className="creator-card">
            <img 
              src={course.creator_image} 
              alt={course.creator_name} 
              className="creator-avatar"
            />
            <h3>{course.creator_name}</h3>
            <a 
              href={course.creator_youtube_link}
              target="_blank" 
              rel="noopener noreferrer"
              className="creator-link"
            >
              View Channel
            </a>
          </div>
        ))}
          <div className="creator-card">
            <img src="favicon.png" height={"auto"} width={40} className="creator-avatar"  alt="Logo Codify" />
            <h3>And Many More</h3>
            <Link className="creator-link"

            >
              View More
            </Link>
          </div>
      </div>
    )
}

export default CreatorsContainer;