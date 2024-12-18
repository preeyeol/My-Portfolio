import React from "react";
import "../css/Project.css";

const projectData = [
  {
    title: "Project One",
    description: "Description of project one.",
    image: "project1.png",
    link: "https://example.com",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    image: "project2.png",
    link: "https://example.com",
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projectData.map((project, index) => (
        <div key={index} className="project">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
