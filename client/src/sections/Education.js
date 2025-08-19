import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
    year: "2024 - 2025",
    degree: "B.Sc. Information Technology for Business",
    institution: "Oxford Brookes University",
    modules: [
      "Final Year Dissertation",
      "Foundation in Data Analytics",
      "Business Ethics",
      "Software Project Management",
      "Cloud Computing and IOT",
    ]
  },
  {
    year: "2018 - 2021",
    degree: "Advance Diploma in Computer programming and Analysis",
    institution: "Georgian College",
    modules: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "React",
      "NodeJS",
      "Databases"
    ]
  },
  {
    year: "2015 - 2017",
    degree: "High School Diploma",
    institution: "Bhartiya Vidya Mandir",
    modules: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "English",
      "Punjabi"
    ]
  }
  ];

  return (
    <section id="education" className="education">
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-year">{item.year}</div>
              <h3 className="education-degree">{item.degree}</h3>
              <div className="education-institution">{item.institution}</div>
              <div>
                <ul className="education-modules">
                    {item.modules.map((module, moduleIndex) => (
                        <li key={moduleIndex}>{module}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;