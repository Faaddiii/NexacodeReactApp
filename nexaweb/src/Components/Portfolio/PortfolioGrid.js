import React from "react";
import "./PortfolioDemo.css";

const projects = [
  { title: "Web design", imgSrc: "/Images/2.png" },
  { title: "SEO Solution Search", imgSrc: "/Images/3.png" },
  { title: "Mobile Application Development", imgSrc: "/Images/4.png" },
  { title: "ERP Solutions", imgSrc: "/Images/5.png" },
  { title: "Software Solutions", imgSrc: "/Images/6.png" },
  { title: "Digital Marketing", imgSrc: "/Images/7.png" },
  { title: "Social Media Marketing", imgSrc: "/Images/8.png" },
  { title: "E-Commerce", imgSrc: "/Images/9.png" },
  { title: "UI/UX", imgSrc: "/Images/uiux.png" },
  { title: "Frontend Design", imgSrc: "/Images/webdesing.png" },
  { title: "Development Solutions", imgSrc: "/Images/webdev.png" },
  { title: "SEO Solutions", imgSrc: "/Images/seo.png" },
];

const PortfolioGrid = () => {
  return (
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.imgSrc} alt={project.title} className="portfolio-image" />
          <div className="overlay">
            <h3 className="project-title">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
