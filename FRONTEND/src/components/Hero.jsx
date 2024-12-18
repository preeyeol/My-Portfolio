import React from "react";
import "../css/Hero.css";

const Hero = () => (
  <section className="hero">
    <h2>Welcome!</h2>

    <p>
      I’m a Full Stack Developer with a passion for creating impactful
      solutions.
    </p>
    <img src="/path/to/your/image.jpg" alt="Hero Image" />
    <a href="#projects" className="hero-button">
      View My Work
    </a>
  </section>
);

export default Hero;
