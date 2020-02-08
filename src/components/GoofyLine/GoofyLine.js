import React from 'react'
import './GoofyLine.scss'

import CustomHeading from '../CustomHeading/CustomHeading'

const GoofyLine = (props) => {

    const classes = ['goofy-word', props.color]

    return (
        <CustomHeading priority={props.priority}>
            {
                props.line.split('').map((letter, index) => (
                    <span key={`letter-${letter}${index}`} className={classes.join(" ")}>{letter.toUpperCase()}</span>
                ))
            }
        </CustomHeading>
    )
}
export default GoofyLine