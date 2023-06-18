import React, { useState } from 'react';
import '../../../src/App.css';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === "name") {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleMessage = (e) => {
        const { target } = e;
        const inputValue = target.value;
        
        if(inputValue === '') {
            setErrorMessage('Please enter a message');
            alert('Please enter a message');
        }
        
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            alert('Please enter a valid email address.');
        } else {
            setErrorMessage('');
            
        }
        
        alert(`Thanks ${name} for contacting me! I will get back to you soon!`);

        setName('');
        setEmail('');
        setMessage('');
    }
    
    
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
            < br /> < br />
          Don't be shy! <br />
          Reach out to me, I look forward to hearing from you!
          < br /> <br /> <br />
        </strong>
      </h3>
      <div>
      <form className="form">
        <h2>Contact Me Here</h2>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input className="message"
          value={message}
          name="message"
          onChange={handleInputChange}
          onMouseOut={handleMessage}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>   
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
  )
};