import React from 'react';
import '../style/Contact.css';
import img from '../assets/image3.png'
function Contact() {
  return (
    <div className="contact-container">
        
      <div className="contact-top">
        
        <div className="contact-info">
          <h2>📍 Location & Hours</h2>
          <p>500 Terry Francine Street,<br />San Francisco, CA 94158</p>
          <p>Monday - Friday: 12pm - 11pm</p>
          <p>Saturday: 11am - 12am</p>
          <p>Sunday: 12pm - 12am</p>
        </div>
        <div className="contact-image">
          <img src={img} alt="People eating" />
        </div>
      </div>

        <div className="contact-map">
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019390144445!2d-122.42067968468128!3d37.778519779758295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2c70cb25b5%3A0x243e3b4b6a9e8355!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615317088347!5m2!1sen!2sus"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
         <div className="contact-form">
  <h2>Send Us a Message</h2>
  <form>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea rows="4" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>

    </div>
  );
}

export default Contact;
