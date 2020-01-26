import React from 'react'
import './CustomHeading.scss'

const CustomHeading = (props) => {

    const CustomTag = `h${props.priority}`

    return (
        <CustomTag className="custom-heading" >
            {
                props.children
            }
        </CustomTag>
    )
}
export default CustomHeading