import roadmapData from "../assets/json/roadmap.json";
import "../components/css/Roadmap.css";
const Roadmap = () => {
    return (
        <>
            <div className="container">
                <div className="gradient-background"></div>
                <div className="roadmap-container">
                    <h2 className="page-heading" >Roadmaps</h2>
                    {roadmapData.map((item) => (
                        <div className="roadmap-item" key={item.roadmap_name}>
                            <h3>{item.roadmap_name}</h3>
                            <a href={item.roadmap_link} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Roadmap;


