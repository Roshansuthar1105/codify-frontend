import React from "react";
import { useState } from "react";
import "../components/css/Pages.css";
import { NavLink } from "react-router-dom";
function Home() {
  //   const move = document.getElementById("follow");
  // document.body.onpointermove = event => {
  //     const { clientX, clientY } = event;
  //     move.animate({
  //         left: `${clientX}px`,
  //         top: `${clientY}px`
  //     }, {duration: 1000, fill: "forwards"})
  // }

  return (
    <div className="container home-cont">
      {/* <video id="home-bg" muted loop autoPlay src="Background.mp4"></video> */}
      <img src="home/bg2.jpg" id="home-bg" alt="" />
      <div className="logo-text">
        <span className="doated" >bitwise</span>
        <span className="yellow" >Learning</span>
      </div>
      <div className="content">
        <span className="white">create new</span>
        <span className="yellow"> experience</span>
        <span className="white">with</span>
        <span className="transparent"><img className="pencil float" src="home/Designer.png" alt="" />ways of<img className="planet float" src="home/planet.svg" alt="" /> </span>
        <span className="white">perfect</span>
        <span className="yellow">learning</span><br />
      </div>
      <div className="content right" >
        <span className="transparent">---</span>
      <span className="transparent">bitwise</span>
        <span className="yellow">learning</span>
      </div>
    </div>
  );
}

export default Home;
