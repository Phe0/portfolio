import React from 'react'
import './Sidenav.scss'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'

const Sidenav = () => (
    <div className="sidenav">
        <div className="sidenav__icons">
            <img className="sidenav__icons__icon" src={linkedin} alt="linkedin-link"/>
            <img className="sidenav__icons__icon" src={github} alt="github-link"/>
            <img className="sidenav__icons__icon" src={email} alt="email-link"/>
        </div>
    </div>
)
export default Sidenav