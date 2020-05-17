import React, { useState } from 'react'
import './BubbleNav.scss'

import About from '../About/About'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'

function BubbleNav() {

    const navs = [{ name: 'ABOUT ME', component: About }, { name: 'MY SKILLS', component: Skills }, { name: 'EXPERIENCES', component: Experience }, { name: 'CONTACT ME', component: Contact }]

    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [positions, setPositions] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    })

    function openBubble(position) {
        const pos = {
            1: false,
            2: false,
            3: false,
            4: false
        }
        pos[position] = true
        setPositions(pos)
        if(!shouldAnimate) {
            setShouldAnimate(true);
        }
    }

    function closeBubble() {
        setPositions({
            1: false,
            2: false,
            3: false,
            4: false
        })
    }

    return (
        <>
            {
                navs.map((nav, index) => {
                    return (
                        <div role="button" key={index} className={`bubble-nav__bubble position`
                        } onClick={() => openBubble(index + 1)}>
                            <h6 className={`bubble-nav__bubble__item${index + 1}`}>{nav.name}</h6>
                        </div>
                    )
                })
            }
            {
                navs.map((nav, index) => {
                    let MyComponent = nav.component;
                    return (
                        <section key={index} className={`bubble-nav__bubble open-${index+1} ${positions[index+1] ? `open` : `close`}`
                        }>
                            <MyComponent close={closeBubble} />
                        </section>
                    )
                })
            }
        </>
    )
}
export default React.memo(BubbleNav)