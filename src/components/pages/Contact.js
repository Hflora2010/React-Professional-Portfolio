import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-head">
        C <br />
        O <br />
        N <br />
        T <br />
        A <br />
        C <br />
        T
      </h2>
      <h3 className="contact-desc">
        <strong>
          Don't be shy! <br />
          <br />
          <br />
          Reach out to me, I look forward to hearing from you!
        </strong>
      </h3>
      <section className="contact-container">
        <div className="contact-img">
          <img src="./images/checkmark-map-location-icon.png" alt="Map location" />
        </div>
        <div className="contact-text font">
          <p>ADDRESS</p>
          <p>51 Fox Street <br /> Bridgeport, CT 06605</p>
        </div>
        <div className="contact-img">
          <img src="./images/cell-phone-icon.png" alt="Cellphone" />
        </div>
        <div className="contact-text">
          <p>CALL OR TEXT</p>
          <a href="tel:1-203-801-8095">1-203-801-8095</a>
        </div>
        <div className="contact-img">
          <img src="./images/paper-plane-icon.png" alt="Email" />
        </div>
        <div className="contact-text font">
          <p>EMAIL</p>
          <a href="mailto:haileycflora@gmail.com">Haileycflora@gmail.com</a>
        </div>
      </section>
    </section>
  );
};

export default Contact;