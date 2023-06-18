import React from "react";

const Resume = () => {
  return (
    <div id="resume-container">
      <section className="resume">
        <h2>
          R <br />
          E <br />
          S <br />
          U <br />
          M <br />
          E <br />
        </h2>

        <figure className="resume-screenshot">
          <img
            src="./images/Resume-Screen-Shot.png"
            alt="Resume"
            className="resume-screenshot"
          />
        </figure>

        
        <p className="proficiences">
          <h3>PROFICIENCIES</h3> <br />
          <ul>
            <li>HTML</li>
            <li>CSS</li> 
            <li>CSS</li>
            <li>RESPONSIVE DESIGN</li>
            <li>WEB APIS</li>
            <li>NODE.JS</li>
            <li>EXPRESS</li>
            <li>SQL</li>
            <li>NOSQL</li>
            <li>HANDLEBARS.JS</li>
            <li>STATE</li>
            </ul>
        </p>
        <a
          className="download-resume"
          href="./public/resume/Hailey-Flora-Resume.pdf"
          download
        >
          Download My Resume
        </a>
      </section>
    </div>
  );
};

export default Resume;
