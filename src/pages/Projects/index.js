import React from "react";
import { Link } from "react-router-dom";
import GoofyLine from "../../components/GoofyLine";
import closeIcon from "../../assets/closeWhite.svg";
import projects from "../../utils/projects";
import Card from "../../components/Card";

export default function Projects() {
  return (
    <main className="screen pink">
      <section className="screen__content">
        <section className="screen__header">
          <article>
            <GoofyLine line="Projects" priority="1" color="purple-only" />
          </article>
          <Link to="/">
            <img
              src={closeIcon}
              role="button"
              alt="close button"
              className="close-icon"
            />
          </Link>
        </section>
        <p className="text white-text">Those are some of my projects.</p>
        <section className="screen__body screen__body--grid">
          {projects.map((project, index) => {
            if (project.link) {
              return (
                <a
                  key={index}
                  href={project.link}
                  className="hover-effect"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    title={project.name}
                    description={project.description}
                    tags={project.tags}
                  />
                </a>
              );
            }
            return (
              <Link
                key={index}
                to={project.localLink}
                style={{ textDecoration: "none" }}
                className="hover-effect"
              >
                <Card
                  title={project.name}
                  description={project.description}
                  tags={project.tags}
                />
              </Link>
            );
          })}
        </section>
      </section>
    </main>
  );
}
