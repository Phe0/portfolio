import React from 'react';
import GoofyLine from '../GoofyLine/GoofyLine'
import closeIcon from '../../assets/close.svg'
import './Skills.scss'

import skills from '../../utils/skills'
import techs from '../../utils/tech'

function Skills({close}) {

    return (
        <main role="dialog" className="skills">
            <section className="skills__content">
                <section className="skill-title">
                    <article className="skill-title__title">
                        <GoofyLine line="My Skills" priority="6" color="orange-only" />
                    </article>
                    <img src={closeIcon} role="button" alt="close button" className="close-icon" onClick={() => close()} />
                </section >
                <section className="skills-content">
                    <section className="skills-content__section">
                        {
                            skills.map((skill, index) => (
                                <span className="skill" key={index}>{skill}</span>
                            ))
                        }
                    </section>
                    <section className="skills-content__section">
                    {
                        techs.map((tech, index) => (
                            <figure className="tech" key={index}>
                                <div className="tech__name">{tech.name}</div>
                                <img className="tech__image" src={tech.image} alt={tech.name} />
                            </figure>
                        ))
                    }
                    </section>
                </section>
            </section>
        </main>
    )
}

export default React.memo(Skills)