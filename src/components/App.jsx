import React from "react";

// Styles
import "../assets/index.css";

// Components
import { Header } from "./Header";
import { PlayerCard } from "./PlayerCard";
import { Footer } from "./Footer";

const App = () => (
  <div className="app">
    <Header />
    <div className="app__cards">
      <PlayerCard />
      <PlayerCard bgColor="yellow" />
    </div>
    <Footer />
  </div>
);

export { App };
