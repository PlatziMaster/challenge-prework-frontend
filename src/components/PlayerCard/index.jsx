import React from "react";

// Styles
import "./PlayerCard.css";

const PlayerCard = ({ children, bgColor }) => (
  <div className={`player-card player-card--${bgColor ? bgColor : "green"}`}>
    <div className="player-card__heading">
      <h2>Player X</h2>
    </div>
    <div className="player-card__actions">
      <div className="player-card__life">
        <span>50%</span>
        <div className="player-card__progress" />
      </div>
      <div className="player-card__button">
        <button type="button">Play</button>
      </div>
    </div>
    <div className="player-card__character">{children}</div>
  </div>
);

export { PlayerCard };
