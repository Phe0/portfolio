import React from 'react';
import GoofyLine from '../GoofyLine/GoofyLine'
import closeIcon from '../../assets/close.svg'
import './Skills.scss'

import skills from '../../utils/skills'

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
                    <p className="screen__about__body__text-area__text">
                        Here are some of my skills and technologies I enjoy using.
                    </p>
                    <section className="skills-content__section">
                        {
                            skills.map((skill, index) => (
                                <section className="skill" key={index}>
                                    <div className="skill__info">
                                        <h2 className="skill__info__name">{skill.name}</h2>
                                        <h4 className="skill__info__level">{skill.level}</h4>
                                    </div>
                                </section>
                            ))
                        }
                    </section>
                </section>
            </section>
        </main>
    )
}

export default React.memo(Skills)