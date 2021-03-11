import React from "react";
import { Link } from "react-router-dom";
import GoofyLine from "../../components/GoofyLine";
import Transition from "../../components/Transition";
import experiences from "../../utils/experience";
import closeIcon from "../../assets/closeWhite.svg";
import Card from "../../components/Card";

export default function Experience() {
  return (
    <main role="dialog" className="screen pink">
      <Transition>
        <section className="screen__content">
          <section className="screen__header">
            <article>
              <GoofyLine line="Experiences" priority="6" color="purple-only" />
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
          <p className="white-text text">
            Those are some important experiences I had in my career so far.
          </p>
          <section className="screen__body screen__body--grid">
            {experiences.map((experience, index) => (
              <a
                href={experience.link}
                className="hover-effect"
                style={{ textDecoration: "none" }}
              >
                <Card
                  title={experience.place}
                  subtitle={experience.role}
                  description={experience.description}
                  date={experience.date}
                />
              </a>
            ))}
          </section>
        </section>
      </Transition>
    </main>
  );
}
