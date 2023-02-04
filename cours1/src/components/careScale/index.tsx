import React from "react";

type CareProps = {
    scaleValue: number,
    careType:  String
}


function CareScale({scaleValue, careType}: CareProps) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale;