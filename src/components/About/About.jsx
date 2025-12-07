import React from "react";
import "./about.css";
import About_img from "../../assets/sudeep.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
           <img src={About_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A highly motivated and detail-oriented BCA graduate with a strong academic background in computer appli
              cations and software development. 
            </p>
            <p>
              Skilled in programming, web technologies,and database management, with a
 keen interest in learning new technologies and contributing effectively in a professional IT environment.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML && CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>Hands on Creating WebPages</p>
        </div>
        <hr />
         <div className="about-achievement">
          <h1>10+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Creative Designer</p>
        </div>
        
       </div>
    </div>
  );
};

export default About;
