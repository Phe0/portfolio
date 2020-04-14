import React, { useState, Suspense } from 'react'
import './BubbleNav.scss'

function BubbleNav() {

    const navs = [{ name: 'ABOUT ME' }, { name: 'MY SKILLS' }, { name: 'EXPERIENCES' }, { name: 'CONTACT ME' }]

    const [isOpen, setIsOpen] = useState(false)
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
        setIsOpen(true)
    }

    function closeBubble() {
        setPositions({
            1: false,
            2: false,
            3: false,
            4: false
        })
        setIsOpen(false)
    }

    return (
        <div className={`bubble-nav ${isOpen ? 'front-enable' : ''} `}>
            <div className={`modal-${isOpen ? 'open' : ''}`} onClick={() => closeBubble()}>
            </div>
            {
                navs.map((nav, index) => {
                    if (positions[index + 1]) {
                        let MyComponent
                        switch (index) {
                            case 0:
                                MyComponent = React.lazy(() => import('../About/About'))
                                break
                            case 1:
                                MyComponent = React.lazy(() => import('../Skills/Skills'))
                                break
                            case 2:
                                MyComponent = React.lazy(() => import('../Experience/Experience'))
                                break
                            case 3:
                                MyComponent = React.lazy(() => import('../Contact/Contact'))
                                break
                            default:
                                throw new Error()
                        }
                        return (
                            <div key={index} className={`bubble-nav__bubble position-${index + 1}__open`
                            }>
                                <Suspense fallback={<div></div>}>
                                    <MyComponent close={closeBubble} />
                                </Suspense>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div role="button" key={index} className={`bubble-nav__bubble position-${index + 1}`
                            } onClick={() => openBubble(index + 1)}>
                                <h6 className={`bubble-nav__bubble__item${index + 1}`}>{nav.name}</h6>
                            </div>
                        )
                    }
                })
            }
        </div >
    )
}
export default React.memo(BubbleNav)