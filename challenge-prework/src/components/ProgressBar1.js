import React from 'react';
import '../assets/styles/ProgressBar1.css';


// Progress bar for player 1

const ProgressBar1 = ({progress}) => {
    return (
            <div className="ProgressBar1">
                <div style={{ width: progress, height:"42px", backgroundColor:"#FF89BB", 
                border: "1px solid #FF89BB", borderRadius: "30px"}}></div>
            </div>
        )
}

export default ProgressBar1;