import React, { useState } from "react";
import githublogo from "../../assets/icons/githublogo.png"


function Home() {
  const [projects] = useState([
    {
      name: "",
      link: "",
      gitLink: "",
    },
    {
      name: "",
      link: "",
      gitLink: "",
    },
    {
      name: "",
      link: "",
      gitLink: "",
    },
    {
      name: "",
      link: "",
      gitLink: "",
    },
    {
      name: "",
      link: "",
      gitLink: "",
    },
    {
      name: "",
      link: "",
      gitLink: "",
    },
  ]);

  return (
    <div>
      <h1 className="pro-title">projects</h1>
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
              <a href={image.link}>
                {" "}
                <span className="name  py-1 px-1">{image.name}</span>
              </a>
              <a href={image.gitLink}>
                <img
                  src={githublogo.png}
                  alt="link to git hub"
                  className="project-link "
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
export default Home;