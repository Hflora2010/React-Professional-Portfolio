import React from 'react';

const Home = () => {
    return (
      <div>
        <header className="header">
          <h1>Hailey Flora</h1>
          <nav>
            <ul>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
              <li>
                <a href="#work">My Work</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </nav>
        </header>
        <figure>
          <img className="mainimage" src="./css/images/br-sunset.jpeg" alt="black-rock-sunset" />
          <h2>Hailey Flora</h2>
        </figure>
        <section>
          <div className="flexcontainer">
            <img src="./images/hailey.png" alt="hailey" />
            <div className="flex1">Lets.</div>
            <div className="flex2">Design.</div>
            <div className="flex3">Together.</div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;