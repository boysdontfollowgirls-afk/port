import React from "react";
import "./Hero.css";
import Profile_img from "../../assets/sudeep.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Profile_img}alt="" />
      <h1><span>I'm Sudeep,</span> MERN Stack Developer</h1>
      <p>
        I am a mern stack develpoer , I have Strong Technical Knowledge in both
        Frontend and Backend Technologies like
        React-js,Node-js,Express-js,Moongodb ete...
      </p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
        <a href="/sudeepbj.pdf" style={{textDecoration:'none'}} download><div className="hero-resume">My resume</div></a>
      </div>
    </div>
  );
};

export default Hero;
