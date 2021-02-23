import React, { useState } from 'react';
import '../assets/styles/ButtonLeft.css';
import ProgressBar2 from './ProgressBar2';
import Modal from './Modal';


// Player 1: Left Button

export const ButtonLeft = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    function handleProgress() {
        setProgress(progress >= 200 ? 0: progress + 40)
        if(progress === 200 ) { 
            setIsOpen(!isOpen);
        }
    }

    return (
        <div className="ButtonLeft">
            <ProgressBar2 progress={progress} onLoaderFinished={() => setProgress(0)}/>
            <button className="ButtonLeft__b1" type="submit" 
            onClick={handleProgress}>Play</button>
            {isOpen && <Modal action={handleClick} isOpen={isOpen} />}
        </div>
    );
};

export default ButtonLeft;