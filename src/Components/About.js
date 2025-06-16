import React from 'react';
import '../style/About.css'
import image from '../assets/image1.png'
import dinning from '../assets/dinnig.png'
import Chef from '../assets/Chef.png'
import Outdoor from '../assets/Outdoor.png'
const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Welcome to KindKitchen</h1>
        <p>Where tradition meets taste!</p>
      </section>

      <section className="about-story">
        <div className="about-img">
          <img src={image} alt="Our Restaurant" />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, KindKitchen has been bringing families and friends together over hearty meals and warm ambiance. Our dishes are inspired by age-old recipes and infused with a modern twist to delight every palate.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>What Makes Us Special</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Authentic Recipes</h3>
            <p>Handed down through generations, our recipes tell a flavorful story of culture and care.</p>
          </div>
          <div className="value-card">
            <h3>Fresh Ingredients</h3>
            <p>We source our produce locally to ensure every dish is as fresh as it is delicious.</p>
          </div>
          <div className="value-card">
            <h3>Warm Hospitality</h3>
            <p>Every guest is family. Our service reflects our love for people and food.</p>
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <h2>Our Ambience</h2>
        <div className="gallery-grid">
          <img src={dinning} alt="Dining Area" />
          <img src={Chef} alt="Chef in Action" />
          <img src={Outdoor} alt="Outdoor Seating" />
        </div>
      </section>
    </div>
  );
};

export default About;
