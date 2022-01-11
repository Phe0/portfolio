import React from "react";
import { Link } from "react-router-dom";
import GoofyLine from "../../components/GoofyLine";
import closeIcon from "../../assets/closeWhite.svg";
import Card from "../../components/Card";
import algorithms from "../../utils/algorithms";

export default function Algorithms() {
  return (
    <main className="screen pink">
      <section className="screen__content">
        <section className="screen__header">
          <article>
            <GoofyLine line="Algorithms" priority="1" color="purple-only" />
          </article>
          <Link to="/projects">
            <img
              src={closeIcon}
              role="button"
              alt="close button"
              className="close-icon"
            />
          </Link>
        </section>
        <section className="screen__body screen__body--grid">
          {algorithms.map((algorithm, index) => (
            <Card
              key={index}
              title={algorithm.name}
              description={algorithm.description}
              projectLink={algorithm.projectLink}
              githubLink={algorithm.githubLink}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
