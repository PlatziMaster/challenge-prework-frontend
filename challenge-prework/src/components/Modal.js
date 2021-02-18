import React from 'react';
import '../assets/styles/Modal.css';


function Modal ({ action }) {
    
    return (
        <div className="Modal"> 
            <div className="image__modal"></div>
                <p className="text__1">The winner is:</p>
                <p className="text__2">Player 1</p>
            <button onClick={action} className="modal__button">Play again</button>
        </div>
    );
}


export default Modal;