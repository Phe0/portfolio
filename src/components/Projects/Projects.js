import React from 'react';
import GoofyLine from '../GoofyLine/GoofyLine'
import closeIcon from '../../assets/closeWhite.svg'
import './Projects.scss'

function Projects({close}) {

    return (
        <main role="dialog" className="projects">
        <section className="projects__content">
            <section className="title-area">
                <article className="title-area__title">
                    <GoofyLine line="Projects" priority="6" color="purple-only" />
                </article>
                <img src={closeIcon} role="button" alt="close button" className="close-icon" onClick={() => close()} />
            </section >
        </section>
    </main>
    )
}

export default React.memo(Projects)