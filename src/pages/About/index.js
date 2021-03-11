import React from "react";
import { Link } from "react-router-dom";
import Transition from "../../components/Transition";
import GoofyLine from "../../components/GoofyLine";
import closeIcon from "../../assets/close.svg";
import photo from "../../assets/photo.jpg";

export default function About() {
  return (
    <main role="dialog" className="screen purple">
      <Transition>
        <section className="screen__content">
          <section className="screen__header">
            <article>
              <GoofyLine line="About Me" priority="6" color="pink-only" />
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
            <article className="screen__text">
              <p className="text gray-text">
                Hello! My name is Pedro Féo, I'm a Software Engineer student
                based in Brasília, Brazil. I enjoy developing software
                applications that are not only intuitive but also fun to use .
              </p>
              <p className="text gray-text">
                Currently I'm pursuing a Software Engineering degree at{" "}
                <a href="https://www.unb.br/">UnB</a>, where I have the
                opportunity to work on a variety of projects, programs and
                classes.
              </p>
              <p className="text gray-text">
                I'm also a software developer at{" "}
                <a href="https://www.probonodigital.com">Probono Digital</a>{" "}
                where I have the opportunity to work with a remote
                multidisciplinary team with the common objective of bringing
                rights for everyone.
              </p>
              <p className="text gray-text">
                Some of my hobbies are drawing, boldering and spending time with
                my friends.
              </p>
            </article>
            <figure className="screen__img">
              <img alt="Pedro Féo" src={photo} />
            </figure>
          </section>
        </section>
      </Transition>
    </main>
  );
}
