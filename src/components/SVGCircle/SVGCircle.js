import React, { useEffect, useState } from 'react'
import './SVGCircle.scss'

export default function SVGCircle({percentage}) {
    const [radius, setRadius] = useState(null);
    const [viewBox, setViewbox] = useState(36);

    useEffect(() => {
        console.log(percentage)
    }, [])
    
    return (
            <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle"
                    strokeDasharray={`${percentage*100}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
    )
}