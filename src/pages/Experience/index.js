import React from 'react';
import { Link } from 'react-router-dom';
import GoofyLine from '../../components/GoofyLine';
import Transition from '../../components/Transition';
import experiences from '../../utils/experience';
import closeIcon from '../../assets/closeWhite.svg';
import './index.scss';

export default function Experience() {
    return (
        <main role="dialog" className="experience">
            <Transition>
                <section className="experience__content">
                <section className="title-area">
                    <article className="title-area__title">
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
                <p className="experience-text">
                    Those are some important experiences I had in my career so far.
                </p>
                <section className="experiences">
                    {experiences.map((experience, index) => (
                    <a href={experience.link} style={{ textDecoration: "none" }}>
                        <section key={index} className="experience-card">
                        <div>
                            <div className="experience-card__heading">
                            <h2 className="experience-card__heading__place">
                                {experience.place}
                            </h2>
                            <h3 className="experience-card__heading__role">
                                {experience.role}
                            </h3>
                            </div>
                            <p className="experience-card__description">
                            {experience.description}
                            </p>
                        </div>
                        <p className="experience-card__date">{experience.date}</p>
                        </section>
                    </a>
                    ))}
                </section>
                </section>
            </Transition>
        </main>
    )
}