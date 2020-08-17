import React, { useState } from "react";

// Styles
import "../assets/index.css";

// Components
import { Header } from "./Header";
import { PlayerCard } from "./PlayerCard";
import { Footer } from "./Footer";
import { Modal } from "./Modal/";

const App = () => {
  const [playerOne, setPlayerOne] = useState({
    name: "Player 1",
    health: 100,
    hisTurn: true,
  });

  const [playerTwo, setPlayerTwo] = useState({
    name: "Player 2",
    health: 100,
    hisTurn: false,
  });

  const [winner, setWinner] = useState(null);

  const handleClick = () => {
    const randomDamage = Math.round(Math.random() * 30);
    if (playerOne.hisTurn) {
      setPlayerTwo({
        ...playerTwo,
        health: playerTwo.health - randomDamage,
        hisTurn: !playerTwo.hisTurn,
      });

      setPlayerOne({
        ...playerOne,
        hisTurn: !playerOne.hisTurn,
      });

      if (playerTwo.health - randomDamage <= 0) {
        setWinner(playerOne.name);
      }
    } else {
      setPlayerOne({
        ...playerOne,
        health: playerOne.health - randomDamage,
        hisTurn: !playerOne.hisTurn,
      });

      setPlayerTwo({
        ...playerTwo,
        hisTurn: !playerTwo.hisTurn,
      });

      if (playerOne.health - randomDamage <= 0) {
        setWinner(playerTwo.name);
      }
    }
  };

  const handleReset = () => {
    setPlayerOne({ ...playerOne, health: 100, hisTurn: true });
    setPlayerTwo({ ...playerTwo, health: 100, hisTurn: false });

    setWinner(null);
  };

  return (
    <div className="app">
      <Header />
      <div className="app__cards">
        <PlayerCard player={playerOne} handleButton={handleClick} />
        <PlayerCard
          player={playerTwo}
          bgColor="yellow"
          handleButton={handleClick}
        />
      </div>
      <Footer />
      {winner ? <Modal winner={winner} reset={handleReset} /> : null}
    </div>
  );
};

export { App };
