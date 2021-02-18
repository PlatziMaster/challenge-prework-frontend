import React from 'react';
import '../assets/styles/PersonajeCard2.css';
import '../assets/styles/Warrior2.css';


const PersonajeCard2 = () => (

    <div className="PersonajeCard2">
        <div className="head">
            <div className="mask-p2"></div>
            <div className="eyes-left"></div>
            <div className="eyes-right"></div>
            <div className="mouth-p2"></div>
        </div>
        <div className="body-p2">
            <div className="arm__left-p2"></div>
            <div className="arm__right-p2"></div>
            <div className="hand-p2">
                <div className="weapon">
                    <div className="handle"></div>
                    <div className="prompter">
                        <div className="accesory__p2-1"></div>
                        <div className="accesory__p2-2"></div>
                        <div className="accesory__p2-3"></div>
                    </div>
                </div>
            </div>
            <div className="legs__left-p2"></div>
            <div className="legs__right-p2"></div>
        </div>
    </div>

);

export default PersonajeCard2;