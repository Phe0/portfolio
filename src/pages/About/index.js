import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../components/Transition';
import GoofyLine from '../../components/GoofyLine';
import closeIcon from '../../assets/close.svg';
import photo from '../../assets/photo.jpg';
import './index.scss';

export default function About() {
    return (
        <main role="dialog" className="screen">
            <Transition>
                <section className="screen__about">
                    <section className="screen__about__title-area">
                        <article className="screen__about__title-area__title">
                            <GoofyLine line="About Me" priority="6" color="orange-only" />
                        </article>
                        <Link to="/">
                            <img src={closeIcon} role="button" alt="close button" className="close-icon"/>
                        </Link>
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
            </Transition>
        </main>
    )
}