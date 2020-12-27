import React from 'react';
import { Link } from 'react-router-dom';
import GoofyLine from '../../components/GoofyLine';
import Transition from '../../components/Transition';
import closeIcon from '../../assets/closeWhite.svg';
import projects from '../../utils/projects';
import './index.scss';

export default function Projects() {
    return (
        <main role="dialog" className="project">
            <Transition>
                <section className="project__content">
                    <section className="title-area">
                        <article className="title-area__title">
                        <GoofyLine line="Projects" priority="6" color="purple-only" />
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
            </Transition>
        </main>     
    )
}