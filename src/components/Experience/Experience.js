import React from 'react';
import GoofyLine from '../GoofyLine/GoofyLine'
import closeIcon from '../../assets/closeWhite.svg'
import './Experience.scss'

import experiences from '../../utils/experience'

function Experience({close}) {

    return (
        <main role="dialog" className="experience">
            <section className="experience__content">
                <section className="title-area">
                    <article className="title-area__title">
                        <GoofyLine line="Experiences" priority="6" color="purple-only" />
                    </article>
                    <img src={closeIcon} role="button" alt="close button" className="close-icon" onClick={() => close()} />
                </section >
                <p className="experience-text">
                    Those are some important experiences I had in my career so far.
                </p>
                <section className="experiences">
                    {
                        experiences.map((experience, index) => (
                            <section key={index} className="experience-card" >
                                <div className="experience-card__heading">
                                    <h2 className="experience-card__heading__place">{experience.place}</h2>
                                    <h3 className="experience-card__heading__role">{experience.role}</h3>
                                </div>
                                <p className="experience-card__description">{experience.description}</p>
                                <p className="experience-card__date">{experience.date}</p>
                            </section>
                        ))
                    }
                </section>
            </section>
        </main>
    )
}

export default React.memo(Experience)