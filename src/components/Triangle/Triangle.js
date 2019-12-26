import React from 'react'
import './Triangle.scss'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const Triangle = (props) => {

    return (
        <Parallax pages={2} scrolling={true} >
            <ParallaxLayer offset={0} speed={0.4}>
                <div>
                    <svg className="triangles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1709 1465">
                        <path d="M1254.56 0L244 454.181 698.181 1464.74 1254.56 0zM1255.37 1084L1140 992l-92 115.38 207.37-23.38z" fill="#38177D"/>
                    </svg>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="triangles">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1709 1465">
                    <path d="M0 957.736L461.349 745l212.737 461.35L0 957.736zM1218.37 732.213L943 683.37 991.842 408l226.528 324.213z" fill="#D1481D"/>
                    </svg>
                </div>
            </ParallaxLayer>
        </Parallax>
    )
}
export default Triangle