import { useState } from "react";

interface ProgressProps {
    name:string;
    value:number;
}

import "../assets/css/progressBar.css"

const ProgressBar = ({value,name}:ProgressProps) => {
    if(value > 100)
        value = 100;
    if(value < 0)
        value = 0;
    if(isNaN(value))
        value = 0;
    return(<>
    <div className="container">
        <div className="box">
            <div className="shadow"></div>
            <div className="content">
                <div className="percent" data-text={name} style={{"--num": value } as React.CSSProperties}>
                    <div className="dot"></div>
                    <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                </div>
                <div className="number">
                    <h2>{value}<span>%</span></h2>
                </div>
            </div>
        </div>
    </div>
    </>)
}


export const ProgressBarContainer = () => {
    const [progress, setProgress] = useState(0);
    return (
        <>
            <div>
                <ProgressBar value={progress} name="test"></ProgressBar>
                <form>
                    <label htmlFor="html">Input Percentage:</label>
                    <input type="number" onChange={(e) => setProgress(e.target.valueAsNumber)} />
                </form>    
            </div>
        </>)
}