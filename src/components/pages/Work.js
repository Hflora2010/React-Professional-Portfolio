import React from 'react';

const Work = () => {
  return (
    <section id="work">
      <h2>
        P <br />
        R <br />
        O <br />
        J <br />
        E <br />
        C <br />
        T <br />
        S
      </h2>
      <div className="grid.container">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <a
              target="_blank"
              href="https://evening-journey-80732.herokuapp.com/"
            >
              <img
                src="css/images/BMI.png"
                alt="Break-My-Intake-Homepage"
                className="gallery__img"
              />
            </a>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="css/images/br-sunset.jpeg"
              alt="Gallery image 2"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <a
              target="_blank"
              href="https://hflora2010.github.io/Horiseon-Business-Internet-Best-Practices/"
            >
              <img
                src="./css/images/Website-preview.png"
                alt="Horiseon's Landing Page"
                className="gallery__img"
              />
            </a>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <a
              target="_blank"
              href="https://jacobrubino.github.io/DadJokes/"
            >
              <img
                src="./css/images/Screen Shot 2023-03-14 at 8.08.16 PM.png"
                alt="Gallery image 4"
                className="gallery__img"
              />
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Work;