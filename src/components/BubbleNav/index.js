import React, { useState } from 'react'
import './index.scss'
import { useHistory } from 'react-router-dom';

export default function BubbleNav({ children }) {

    const history = useHistory();

    const navs = [
        { 
            name: 'ABOUT ME',
            route: '/about'
        },
        {
            name: 'MY SKILLS', 
            route: '/skills'
        },
        {
            name: 'EXPERIENCES',
            route: '/experience'
        },
        {
            name: 'PROJECTS',
            route: '/projects'
        }
    ]

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
    }

    function changePage(nav, index) {
        openBubble(index)
        setTimeout(() => {
            history.push(nav.route)    
        }, 600)
    }

    return (
        <>
            {children}
            {
                navs.map((nav, index) => {
                    return (
                        <div key={index} className={`bubble-nav__bubble position ${positions[index] ? `open` : null}`} tabIdex="0" onClick={() => changePage(nav, index)}>
                            <h6 className={`bubble-nav__bubble__item${index + 1} ${positions[index] && 'hide'}`}>{nav.name}</h6>
                        </div>
                    )
                })
            }
        </>
    )
}