import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../components/css/Home.css";
import { useAuth } from "../store/auth";
import CreatorsContainer from "../components/HomePageComponents/CreatorsContainer";
import ChooseUs from "../components/HomePageComponents/ChooseUs";
import FAQ from "../components/HomePageComponents/FAQ";
import Testimonials from "../components/HomePageComponents/Testimonials";
import NewsLetter from "../components/HomePageComponents/NewsLetter";
import CallToAction from "../components/HomePageComponents/CallToAction";

function Home() {
  const { coursesData } = useAuth();
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

        <h2 className="stats-heading">Making an Impact <span style={{ color: "var(--bg_buttons)" }}>Together</span></h2>
        <div className="stats-section">
          <div className="stat-item">
            <h3>{coursesData?.length || 70}+</h3>
            <p>Courses</p>
          </div>
          <div className="stat-item">
            <h3>{35}+</h3>
            <p>Roadmaps</p>
          </div>
          <div className="stat-item">
            <h3>{[...new Map(coursesData?.map(course => [course.creator_name, course])).values()].length || 30}+</h3>
            <p>Expert Creators</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Active Users</p>
          </div>
        </div>
      </div>
      {/* Creators Showcase Section */}
      <div className="creators-showcase">
        <h2>Meet Our <span style={{ color: "var(--bg_buttons)" }} >Top Creators</span></h2>
        <CreatorsContainer count={4} />
      </div>
      {/* Roadmaps Preview Section */}
      <div className="learning-paths-showcase">
        <h2 className="paths-heading">Explore Our <span style={{ color: "var(--bg_buttons)" }}>Learning Paths</span></h2>
        <div className="paths-grid">
          <div className="path-card glowing-border">
            <div className="path-content">
              <h3 className="path-title">Frontend Development</h3>
            </div>
          </div>
          <div className="path-card glowing-border">
            <div className="path-content">
              <h3 className="path-title">Backend Development</h3>
            </div>
          </div>
          <div className="path-card glowing-border">
            <div className="path-content">
              <h3 className="path-title">Full Stack Development</h3>
            </div>
          </div>
          <div className="path-card glowing-border">
            <div className="path-content">
              <Link to="/roadmap" className="path-cta pulse-button">View All Paths</Link>
            </div>
          </div>
        </div>
      </div>

      {/* After learning-paths-showcase section, add: */}
      <Testimonials />
      <ChooseUs />
      <NewsLetter />
      <CallToAction />
      {/* <FAQ /> */}
    </div>
  );
}

export default Home;