import React from "react";
import { NavLink } from "react-router-dom";
import "../components/css/Home.css";
import { useAuth } from "../store/auth";
import CreatorsContainer from "../components/CreatorsContainer";

function Home() {
  const {coursesData} = useAuth();
  return (
    <div className="home-container">
      {/* Background with gradient */}
      <div className="gradient-background"></div>

      {/* Main Content */}
      <div className="content-section">
        {/* Headline and CTA */}
        <div className="headline-section">
          <h1 className="headline-text">
            Discover Your <span className="highlight">Perfect Learning Path</span>
          </h1>
          <p className="subtext">
            Explore new ways to learn with us through engaging and hands-on courses.
          </p>
          <NavLink to="/courses" className="cta-button">
            Get Started
          </NavLink>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-item">
          {/* <img src="home/feature1.svg" alt="Interactive Learning" /> */}
          <h3>Interactive Learning</h3>
          <p>Our courses provide hands-on learning with real-world examples.</p>
        </div>
        <div className="feature-item">
          {/* <img src="home/feature2.svg" alt="Expert Instructors" /> */}
          <h3>Expert Instructors</h3>
          <p>Learn from industry professionals who guide you step by step.</p>
        </div>
        <div className="feature-item">
          {/* <img src="home/feature3.svg" alt="Flexible Schedule" /> */}
          <h3>Flexible Schedules</h3>
          <p>Take courses at your own pace with flexible learning hours.</p>
        </div>
      </div>

      {/* Optional Floating Graphics */}
      <div className="floating-elements">
        <img className="float planet" src="home/planet.svg" alt="Planet" />
      </div>
      <div className="floating-elements">
        <img className="float pencil" src="home/Designer.png" alt="Designer" />
      </div>
      {/* Stats Section */}
      <div className="stats-page">

      <h2 className=" stats-heading" >Our Impact in <span style={{color: "var(--bg_buttons)"}} >Numbers</span></h2>
      <div className="stats-section">
        <div className="stat-item">
          <h3>{coursesData?.length || 0}</h3>
          <p>Total Courses</p>
        </div>
        <div className="stat-item">
          <h3>{[...new Map(coursesData?.map(course => [course.creator_name, course])).values()].length || 0}</h3>
          <p>Expert Creators</p>
        </div>
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Active Users</p>
        </div>
      </div>
      </div>
      {/* Creators Showcase Section */}
      <div className="creators-showcase">
        <h2>Meet Our <span style={{color: "var(--bg_buttons)"}} >Top Creators</span></h2>
        <CreatorsContainer count={5}  />
      </div>
    </div>
  );
}

export default Home;