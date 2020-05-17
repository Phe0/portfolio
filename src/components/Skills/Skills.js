import React from 'react';
import GoofyLine from '../GoofyLine/GoofyLine'
import closeIcon from '../../assets/close.svg'
import './Skills.scss'

function Skills({close}) {

    return (
        <main role="dialog" className="skills">
            <section className="skills__content">
                <section className="title-area">
                    <article className="title-area__title">
                        <GoofyLine line="My Skills" priority="6" color="orange-only" />
                    </article>
                    <img src={closeIcon} role="button" alt="close button" className="close-icon" onClick={() => close()} />
                </section >
            </section>
        </main>
    )
}

export default React.memo(Skills)