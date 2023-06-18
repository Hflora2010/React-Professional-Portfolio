import React from 'react';

const Portfolio = () => {
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
              target="_blank" rel="noopener noreferrer"
              href="https://evening-journey-80732.herokuapp.com/"
            >
              <img
                src="./images/BMI.png"
                alt="Break-My-Intake-Homepage"
                className="gallery__img"
              />
            </a>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="./images/br-sunset.jpeg"
              alt="Gallery 2"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://hflora2010.github.io/Horiseon-Business-Internet-Best-Practices/"
            >
              <img
                src="./images/Website-preview.png"
                alt="Horiseon's Landing Page"
                className="gallery__img"
              />
            </a>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://jacobrubino.github.io/DadJokes/"
            >
              <img
                src="./images/Screen Shot 2023-03-14 at 8.08.16 PM.png"
                alt="Gallery 4"
                className="gallery__img"
              />
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;