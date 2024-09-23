import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

import man_emoji2 from "../../assets/man_emoji2.avif";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={man_emoji2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a dedicated and enthusiastic web developer with a strong
              foundation in React JS, Node.js, PostgreSQL, and Express JS. I'm
              passionate about crafting engaging and user-friendly web
              applications. With a focus on clean code and best practices.
            </p>
            <p>
              I'm excited to contribute my skills to a dynamic team and learn
              from experienced professionals.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>PostgreSQL</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
