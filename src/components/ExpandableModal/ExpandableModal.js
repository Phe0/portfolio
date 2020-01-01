import React, {Component} from 'react'
import './ExpandableModal.scss'

class ExpandableModal extends Component {

    state = {
        style: 'modal__not-expanded'
    }

    handleClick = () => {
        if(this.state.style === 'modal__not-expanded') {
            this.setState({style: 'modal__expanded'})
        }
        else {
            this.setState({style: 'modal__not-expanded'})
        }
    }

    render() {
        return (
            <div className={`modal ${this.state.style}`} onClick={this.handleClick}>
                <div className="inside-not-expanded">
                    {this.props.children[0]}
                </div>
                <div className="inside-expanded">
                    {this.props.children[1]}
                </div>
            </div>
        )
    }
}
export default ExpandableModal