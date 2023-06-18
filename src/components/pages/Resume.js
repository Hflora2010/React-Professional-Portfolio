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
        <br />
        <a
          className="download-resume"
          href="./public/resume/Hailey-Flora-Resume.pdf"
          download
        >
          Download My Resume
        </a>
        <p className="proficiences">
          I am 30 years old and new to the Web Development world. <br />
          I currently work in events and catering. I have chosen to dive <br />
          into the development world head first because I want to make <br />
          a leap-of-faith career change. I would like to expand my <br />
          creativity into Web Development and see how putting <br />
          heads together comes out on the web. I have a love for animals, <br />
          sunshine, nature, and people. In my spare time, you can find me <br />
          out on a hike, lounging on the beach, knitting, taking pictures <br />
          or listening to my favorite bands at nearby venues. <br />
        </p>
      </section>
    </div>
  );
};

export default Resume;
