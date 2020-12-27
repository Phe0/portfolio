import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../components/Transition';
import GoofyLine from '../../components/GoofyLine';
import closeIcon from '../../assets/close.svg';
import skills from '../../utils/skills';
import './index.scss';

export default function Skills() {
    return (
        <main role="dialog" className="skills">
            <Transition>
                <section className="skills__content">
                    <section className="skill-title">
                        <article className="skill-title__title">
                        <GoofyLine line="My Skills" priority="6" color="orange-only" />
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
                    <section className="skills-content">
                        <p className="screen__about__body__text-area__text">
                        Here are some of the tools I enjoy using.
                        </p>
                        <section className="skills-content__section">
                        {skills.map((skill, index) => (
                            <section className="skill" key={index}>
                            <div className="skill__info">
                                <h2 className="skill__info__name">{skill.name}</h2>
                                <h4 className="skill__info__level">{skill.level}</h4>
                            </div>
                            </section>
                        ))}
                        </section>
                    </section>
                </section>
            </Transition>
        </main>
    )
}