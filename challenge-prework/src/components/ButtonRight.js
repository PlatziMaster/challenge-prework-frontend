import React, { useState }from 'react';
import '../assets/styles/ButtonRight.css';
import ProgressBar1 from './ProgressBar1';



const ButtonRight = () => {
    const [progress, setProgress] = useState(0)

    return (
        <div className="ButtonRight">
            <ProgressBar1 progress={progress} onLoaderFinished={() => setProgress(0)}/>
            <button className="ButtonRight__bd" type="submit" onClick={() => setProgress(progress +  20)}>Play</button>
        </div>
    )
}


export default ButtonRight;