import React from "react";

// Styles
import "../assets/index.css";

// Components
import { Header } from "./Header";
import { PlayerCard } from "./PlayerCard";

const App = () => (
  <div className="app">
    <Header />
    <div className="app__cards">
      <PlayerCard />
      <PlayerCard bgColor="yellow" />
    </div>
  </div>
);

export { App };
