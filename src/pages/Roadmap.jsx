import roadmap from "../assets/json/roadmap.json";
import skills from "../assets/json/skillbasedRoadmaps.json";
import "../components/css/Roadmap.css";
const Roadmap = () => {
    return (
        <>
            <div className="container">
                <div className="gradient-background"></div>
                <div className="roadmap-container">
                    <h2 className="page-heading" >Role based Roadmaps</h2>
                    {roadmap.map((item) => (
                        <div className="roadmap-item" key={item.roadmap_name}>
                            <p>{item.roadmap_name}</p>
                            <a href={item.roadmap_link} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                    <h2 className="page-heading" >Skill Based Roadmaps</h2>
                    {skills.map((item) => (
                        <div className="roadmap-item" key={item.skill_name}>
                            <h3>{item.skill_name}</h3>
                            <a href={item.skill_link} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Roadmap;


