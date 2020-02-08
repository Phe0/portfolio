import React from 'react';
import './About.scss';
import photo from '../../assets/photo.jpg';

import GoofyLine from '../GoofyLine/GoofyLine';

const About = (onClose) => (
    <div className="screen">
        <div className="screen__about">
            <div className="screen__about__title">
                <GoofyLine line="About Me" priority="6" color="orange-only"/>
            </div >
            <div className="screen__about__body">
                <div className="screen__about__body__text-area">
                    <p className="screen__about__body__text-area__text">
                        Hello! My name is Pedro Féo, I'm a Software Engineer student based in Brasília, Brazil. I enjoy developing websites and web apps that are not only intuitive but make the user want to use it.
                    </p>
                    <p className="screen__about__body__text-area__text">
                        Currently I'm attending to <a href="https://www.unb.br/" rel="noopener noreferrer" target="_blank">UnB</a>, where I had the opportunity to work on a variety of projects, programs and classes. Besides that I'm a developer intern at <a href="https://react-it.com/" rel="noopener noreferrer" target="_blank">React-it Solutions</a>, where I work on many projects on a daily basis.
                    </p>
                </div>
                <div className="screen__about__body__img-area">
                    <img className="screen__about__body__img-area__img" alt="Pedro Féo" src={photo}/>
                </div>
            </div>
        </div>
    </div>
)
export default About