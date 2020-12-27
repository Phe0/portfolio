import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function Transition({ children }) {
    return (
        <ReactCSSTransitionGroup
            transitionAppear
            transitionName="transition"
        >
            {children}
        </ReactCSSTransitionGroup>
    )
}