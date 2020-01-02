import React, {Component} from 'react'
import './ExpandableModal.scss'

class ExpandableModal extends Component {

    state = {
        style: 'modal__not-expanded',
        expanded: false
    }

    handleClick = () => {
        if(!this.state.expanded) {
            this.setState({style: 'modal__expanded', expanded: !this.state.expanded})
        }
        else {
            this.setState({style: 'modal__not-expanded', expanded: !this.state.expanded})
        }
    }

    render() {
        return (
            <div className={`modal ${this.state.style}`} onClick={this.handleClick}>
                <div className="inside-not-expanded">
                    {this.props.children[0]}
                </div>
                <div className={`inside-expanded ${this.state.expanded ? null : 'vanish'}`}>
                    {this.props.children[1]}
                </div>
            </div>
        )
    }
}
export default ExpandableModal