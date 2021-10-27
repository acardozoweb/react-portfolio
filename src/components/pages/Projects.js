import React, { useState } from "react";
import githublogo from "../../assets/icons/githublogo.png"


function Portfolio() {
  const [projects] = useState([
    {
      name: "Ruff Cuts",
      link: "https://still-plateau-57843.herokuapp.com/",
      gitLink: "https://github.com/Jacob-Banks/group-3",
    },
    {
      name: "MERN Book Search Engine",
      link: "https://thawing-dawn-06259.herokuapp.com/",
      gitLink: "https://github.com/acardozoweb/mern-booksearch",
    },
    {
      name: "Budget Tracker PWA",
      link: "https://aqueous-oasis-97101.herokuapp.com/",
      gitLink: "https://github.com/acardozoweb/budget-tracker-challenge",
    },
    {
      name: "What 2 Watch",
      link: "https://jacob-banks.github.io/group-project-1/",
      gitLink: "https://github.com/Jacob-Banks/group-project-1",
    },
    {
      name: "Workday Scheduler",
      link: "https://acardozoweb.github.io/workday-scheduler-challenge/",
      gitLink: "https://github.com/acardozoweb/workday-scheduler-challenge",
    },
    {
      name: "Password Generator",
      link: "https://acardozoweb.github.io/password-generator/",
      gitLink: "https://github.com/acardozoweb/password-generator",
    },
  ]);

  return (
    <div>
      <h1 className="pro-title">Projects</h1>
      <div className="flex-row">
        {projects.map((image, i) => (
          <div className="test mx-2 " key={image.name}>
            <img
              src={require(`../../assets/images/projects/${i}.png`).default}
              alt={image.name}
              className="project img-thumbnail "
              key={image.name}
            />
            <div className="sub">
              <a target="_blank" href={image.link}>
                {" "}
                <span className="name  py-1 px-1">{image.name}</span>
              </a>
              <a target="_blank" href={image.gitLink}>
                <img
                  src={githublogo}
                  alt="link to git hub"
                  className="project-link"
                  key={image.gitLink}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;