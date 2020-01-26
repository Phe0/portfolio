import React from 'react'
import './BubbleNav.scss'

class BubbleNav extends React.Component {
    state = {
        isOpen: false,
        position1: false,
        position2: false,
        position3: false,
        position4: false
    }

    render() {
        return (
            <div className={`bubble-nav ${this.state.isOpen ? 'front-enable': ''} `}>
                <div className={`modal-${this.state.isOpen ? 'open' : ''}`} onClick={() => this.closeBubble()}>

                </div>
                <div className={`bubble-nav__bubble position-1${this.state.position1 ? '__open' : ''}`} onClick={() => this.openBubble(1)}>
    
                </div>
                <div className={`bubble-nav__bubble position-2${this.state.position2 ? '__open' : ''}`} onClick={() => this.openBubble(2)}>
    
                </div>
                <div className={`bubble-nav__bubble position-3${this.state.position3 ? '__open' : ''}`} onClick={() => this.openBubble(3)}>
    
                </div>
                <div className={`bubble-nav__bubble position-4${this.state.position4 ? '__open' : ''}`} onClick={() => this.openBubble(4)}>
    
                </div>
            </div>
        )
    }

    openBubble = (position) => {
        const place = 'position'+ position
        this.setState({
            position1: false,
            position2: false,
            position3: false,
            position4: false
        })
        this.setState({
            isOpen: true,
            [place]: true
        })
    }

    closeBubble = () => {
        this.setState({
            isOpen: false,
            position1: false,
            position2: false,
            position3: false,
            position4: false
        })
    }
}
export default BubbleNav