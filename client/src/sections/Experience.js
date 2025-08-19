import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
    title: "Team Lead",
    company: "Co op",
    period: "January 2025 - July 2025",
    duties: [
      "Handle cash management, ensuring accuracy and compliance with financial protocols.",
      "Manage stock levels, including ordering, replenishment, and inventory control, minimizing waste and maximizing efficiency.",
      "Delegate tasks effectively based on individual strengths, ensuring fair workload distribution and maximizing team potential."
    ]
  },
  {
    title: "Line Cook",
    company: "St.Louis Bar and Grill",
    period: "December 2023 - August 2024",
    duties: [
      "Prepared and cooked a variety of dishes, consistently delivering exceptional meals.",
      "Maintained cleanliness and organization of the kitchen and workstations.",
      "Consistently followed food safety and sanitation regulations.",
      "Demonstrated ability to work under pressure, meeting dynamic demand of high-volume kitchen."
    ]
  },
  {
    title: "Supervisor",
    company: "A&W",
    period: "September 2021 - November 2022",
    duties: [
      "Create and execute plans regarding daily operations and store needs.",
      "Plan position charts to determine where employees will be working and the tasks they will be responsible for.",
      "Determine inventory requirements and create purchase orders."
    ]
  },
  {
    title: "Cook",
    company: "A&W",
    period: "July 2018 - September 2021",
    duties: [
      "Worked in a fast-paced environment to make it one of the best A&W in Barrie in terms of service time.",
      "Served more than a hundred guests each day while being a crucial part of the team."
    ]
  },
  {
    title: "Software Developer",
    company: "Tasttlig Corporation",
    period: "March 2020 - May 2020",
    duties: [
      "Successfully generated back-end and front-end code using HTML, React, and Node.js",
      "Worked to create the business proposal and ideas for the company.",
      "Collaborated with other developers to create a clean and user friendly interface."
    ]
  },
  {
    title: "Junior Website Developer",
    company: "Beaver Machine Corporation",
    period: "September 2019 - December 2019",
    duties: [
      "Created secure and functional code using HTML, CSS, PHP, and JavaScript.",
      "Discovered and fixed bugs in code.",
      "Worked in a digital marketing environment."
    ]
  }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-content">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experienceData.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{item.title}</h3>
                  <div className="experience-company">{item.company}</div>
                </div>
                <div className="experience-period">{item.period}</div>
              </div>
                <ul className="experience-duties">
                    {item.duties.map((duty, dutyIndex) => (
                        <li key={dutyIndex}>{duty}</li>
                    ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;