import React from 'react';
import GoofyLine from '../GoofyLine/GoofyLine'
import closeIcon from '../../assets/close.svg'
import './Experience.scss'

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
            </section>
        </main>
    )
}

export default React.memo(Experience)