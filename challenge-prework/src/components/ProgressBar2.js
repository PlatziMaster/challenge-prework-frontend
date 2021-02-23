import React from 'react';
import '../assets/styles/ProgressBar2.css';

// Progress bar for player 2

const ProgressBar2 = ({progress}) => {
    return (
            <div className="ProgressBar2">
                <div style={{ width: progress, height:"42px", backgroundColor:"#FF89BB", 
                border: "1px solid #FF89BB", borderRadius: "30px"}}></div>
            </div>
        )
}

export default ProgressBar2;