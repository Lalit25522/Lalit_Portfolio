import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            👨‍💻
          </div>
          <div className="about-text">
            <p>
              Hello, I am Lalit a passionate Software Developer graduated from Oxford Brookes University.
            </p>
            <p>
              I love problem solving and learning new technologies
            </p>
            <p>
              When I'm not coding, you can find me exploring new places, reading books or playing football.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;