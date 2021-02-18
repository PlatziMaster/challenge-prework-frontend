import React, { useState } from 'react';
import '../assets/styles/ButtonLeft.css';
import ProgressBar2 from './ProgressBar2';


export const ButtonLeft = () => {
    const [progress, setProgress] = useState(0)

    return (
        <div className="ButtonLeft">
            <ProgressBar2 progress={progress} onLoaderFinished={() => setProgress(0)}/>
            <button className="ButtonLeft__b1" type="submit" onClick={() => setProgress(progress + 20)}>Play</button>
        </div>
    );
};

export default ButtonLeft;