import React from "react";
import { Link } from "react-router-dom";
import Transition from "../../components/Transition";
import GoofyLine from "../../components/GoofyLine";
import closeIcon from "../../assets/close.svg";
import skills from "../../utils/skills";

export default function Skills() {
  return (
    <main role="dialog" className="screen purple">
      <Transition>
        <section className="screen__content">
          <section className="screen__header">
            <article>
              <GoofyLine line="My Skills" priority="6" color="pink-only" />
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
          <section className="screen__body screen__body--flex">
            <p className="text gray-text">
              Here are some of the tools I enjoy using.
            </p>
            <section className="screen__skills">
              {skills.map((skill, index) => (
                <section className="skill pink" key={index}>
                  <div className="skill__info">
                    <h2 className="bold white-text fluid">{skill.name}</h2>
                    <h3 className="bold purple-text fluid">{skill.level}</h3>
                  </div>
                </section>
              ))}
            </section>
          </section>
        </section>
      </Transition>
    </main>
  );
}
