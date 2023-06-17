import React from 'react';

const Home = () => {
    return (
      <div>
        <figure>
          <img className="mainimage" src="./images/br-sunset.jpeg" alt="black-rock-sunset" />
          <h2>Hailey Flora</h2> <br />
          <p>Junior Web Developer</p>
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