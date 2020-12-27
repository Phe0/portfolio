import React from 'react'
import './index.scss'

const CustomHeading = (props) => {

    const CustomTag = `h${props.priority}`

    return (
        <CustomTag role="text" className="custom-heading" >
            {
                props.children
            }
        </CustomTag>
    )
}
export default React.memo(CustomHeading)