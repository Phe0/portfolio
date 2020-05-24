import React from "react";
import GoofyLine from "../GoofyLine/GoofyLine";
import closeIcon from "../../assets/closeWhite.svg";
import "./Projects.scss";

import projects from "../../utils/projects";

function Projects({ close }) {
  return (
    <main role="dialog" className="project">
      <section className="project__content">
        <section className="title-area">
          <article className="title-area__title">
            <GoofyLine line="Projects" priority="6" color="purple-only" />
          </article>
          <img
            src={closeIcon}
            role="button"
            alt="close button"
            className="close-icon"
            onClick={() => close()}
          />
        </section>
        <p class="project-text">Those are some of my projects.</p>
        <section className="projects">
          {projects.map((project, index) => (
            <a href={project.link} style={{ textDecoration: "none" }}>
              <section key={index} className="project-card">
                <div>
                  <h2 className="project-card__name">{project.name}</h2>
                  <p className="project-card__description">
                    {project.description}
                  </p>
                </div>
                <div className="project-card__tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-card__tags__tag">{tag}</span>
                  ))}
                </div>
              </section>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}

export default React.memo(Projects);
