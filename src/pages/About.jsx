import React from "react";
import "../components/css/Pages.css";
import { useAuth } from "../store/auth";
function About() {
  const { userdata } = useAuth();
  return (
    <div className="container aboutus-page">
      <div className="gradient-background"></div>
        <h2 className="page-heading" >Welcome {userdata.username ? userdata.username.toUpperCase() :"to Codify"}</h2>
      <div className="left">
        <img src="aboutus.png" alt="" />
      </div>
        <div className="right">
      <p>
        Welcome to Codify, your digital gateway to comprehensive
        computer science education. Dive into HTML, CSS, JS, Java, C, C++,
        Django, app development, web development, and more. Our platform is a
        knowledge hub, empowering learners with the skills needed in the dynamic
        tech landscape. From foundational concepts to advanced techniques,
        Codify ensures clarity in every lesson. Immerse yourself in a
        supportive community, with expertly curated resources and tutorials.
        Whether you're a novice or a seasoned coder, our goal is to foster your
        growth. Join us on a journey of continuous learning, where education
        meets innovation at Codify.
      </p>
        </div>
      <div className="about-section-center">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            At Codify, our mission is to make quality programming education accessible to everyone. 
            We believe in empowering individuals with the skills and knowledge needed to thrive in 
            the digital age through interactive learning experiences and comprehensive resources.
          </p>
        </div>

        <div className="features">
          <h3>What We Offer</h3>
          <ul>
            <li>Comprehensive programming courses from beginner to advanced levels</li>
            <li>Interactive coding exercises and real-world projects</li>
            <li>Expert-led tutorials and detailed documentation</li>
            <li>Supportive community of learners and mentors</li>
            <li>Regular updates with latest programming trends and technologies</li>
          </ul>
        </div>

        <div className="tech-stack">
          <h3>Technologies We Cover</h3>
          <div className="tech-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>Java</span>
            <span>C++</span>
            <span>Django</span>
            <span>Node.js</span>
            <span>Mobile Development</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
