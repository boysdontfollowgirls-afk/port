import React from "react";
import "./Contact.css";
import mail_icon from '../../assets/email.png'
import location_icon from '../../assets/location.png'
import phone_icon from '../../assets/phone.png'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d5f203d-f163-4ea6-9f6a-d9c2aa21c360");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message)
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            My name is sudeep,
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>sudeepb8193@gmail.com</p>

            </div>
            <div className="contact-detail">
                <img src={phone_icon} alt="" />
                <p>8123702812</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Shivamogga karnataka</p>
                
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" required />
            <label htmlFor="">Your Email</label>
            <input type="email"  placeholder="Enter your email" name="email" required/>
            <label htmlFor="">Write Your message here</label>
            <textarea name="message" rows={4} placeholder="Enter your message" required ></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
