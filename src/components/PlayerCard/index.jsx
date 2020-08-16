import React from "react";

// Styles
import "./PlayerCard.css";

const PlayerCard = ({ children, player, bgColor, handleButton }) => {
  return (
    <div className={`player-card player-card--${bgColor ? bgColor : "green"}`}>
      <div className="player-card__heading">
        <h2>{player.name}</h2>
      </div>
      <div className="player-card__actions">
        <div className="player-card__life">
          <span>{player.health <= 0 ? "0" : player.health}%</span>
          <div className="player-card__progress">
            <div
              style={{
                width: player.health <= 0 ? "0%" : `${player.health}%`,
              }}
              className="player-card__health-indicator"
            />
          </div>
        </div>
        <div className="player-card__button">
          <button
            type="button"
            onClick={handleButton}
            style={{
              cursor: !player.hisTurn ? "not-allowed" : null,
              backgroundColor: !player.hisTurn ? "red" : null,
            }}
            disabled={!player.hisTurn}
          >
            Play
          </button>
        </div>
      </div>
      <div className="player-card__character">{children}</div>
    </div>
  );
};

export { PlayerCard };
