import React from "react";

// Styles
import "./Header.css";

const Header = () => (
  <>
    <header className="header">
      <div className="header__bubbles-left-container">
        <div className="header__bubble header__bubble--big-left" />
        <div className="header__bubble header__bubble--small-left" />
      </div>

      <div className="header__heading">
        <h1>Platzi Game</h1>
      </div>

      <div className="header__bubbles-right-container">
        <div className="header__bubble header__bubble--big-right" />
        <div className="header__bubble header__bubble--small-right" />
      </div>
    </header>
  </>
);

export { Header };
