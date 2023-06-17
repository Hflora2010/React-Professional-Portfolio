import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>
        A <br />
        B <br />
        O <br />
        U <br />
        T
      </h2>
      <img src="./images/stow-sunset.jpeg" alt="mount snow sunset" />
      <p>
        I am 30 years old and new to the Web Development world. <br />
        I currently work in events and catering. I have chosen to dive <br />
        into the development world head first because I want to make <br />
        a leap-of-faith career change. I would like to expand my <br />
        creativity into Web Development and see how putting <br />
        heads together comes out on the web. I have a love for animals, <br />
        sunshine, nature, and people. In my spare time, you can find me <br />
        out on a hike, lounging on the beach, knitting, taking pictures <br />
        or listening to my favorite bands at nearby venues. <br />
        <span className="last-line">
          <strong>Let's see what we can accomplish together.</strong>
        </span>
      </p>
      <img src="./images/group-photo.jpeg" alt="friends in snow" />
    </section>
  );
};

export default About;