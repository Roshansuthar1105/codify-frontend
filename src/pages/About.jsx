import React from "react";
import "../components/css/Pages.css";
import { useAuth } from "../store/auth";
function About() {
  const { isLoggedIn } = useAuth();
  const { userdata } = useAuth();
  return (
    <div className="container aboutus-page">
        <h2 className="page-heading" >Welcome {isLoggedIn ? userdata.username :"to Bitwise Learning"}</h2>
      <div className="left">
        <img src="aboutus.png" alt="" />
      </div>
        <div className="right">
      <p>
        Welcome to BitWise Learning, your digital gateway to comprehensive
        computer science education. Dive into HTML, CSS, JS, Java, C, C++,
        Django, app development, web development, and more. Our platform is a
        knowledge hub, empowering learners with the skills needed in the dynamic
        tech landscape. From foundational concepts to advanced techniques,
        BitWise Learning ensures clarity in every lesson. Immerse yourself in a
        supportive community, with expertly curated resources and tutorials.
        Whether you're a novice or a seasoned coder, our goal is to foster your
        growth. Join us on a journey of continuous learning, where education
        meets innovation at BitWise Learning.
      </p>
        </div>
    </div>
  );
}

export default About;
