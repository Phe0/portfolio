import React from 'react';
import './About.scss';
import photo from '../../assets/photo.jpg';
import closeIcon from '../../assets/close.svg';

import GoofyLine from '../GoofyLine/GoofyLine';

function About({ close }) {

    return (
        <main role="dialog" className="screen">
            <section className="screen__about">
                <section className="screen__about__title-area">
                    <article className="screen__about__title-area__title">
                        <GoofyLine line="About Me" priority="6" color="orange-only" />
                    </article>
                    <img src={closeIcon} role="button" alt="close button" className="close-icon" onClick={() => close()} />
                </section >
                <section className="screen__about__body">
                    <article className="screen__about__body__text-area">
                        <p className="screen__about__body__text-area__text">
                            Hello! My name is Pedro Féo, I'm a Software Engineer student based in Brasília, Brazil. I enjoy developing websites and web apps that are not only intuitive but also fun to use.
                        </p>
                        <p className="screen__about__body__text-area__text">
                            Currently I'm attending to <a href="https://www.unb.br/">UnB</a>, where I have the opportunity to work on a variety of projects, programs and classes.
                        </p>
                        <p className="screen__about__body__text-area__text">
                            I'm also a software engineer at <a href="https://www.probonodigital.com" >Probono Digital</a> where I have the opportunity to work with a remote multidisciplinary team with a common objective.
                        </p>
                        <p className="screen__about__body__text-area__text">
                            Some of my hobbies are drawing, boldering and spending time with my friends.
                        </p>
                    </article>
                    <figure className="screen__about__body__img-area">
                        <img className="screen__about__body__img-area__img" alt="Pedro Féo" src={photo} />
                    </figure>
                </section>
            </section>
        </main>
    )
}
export default React.memo(About)