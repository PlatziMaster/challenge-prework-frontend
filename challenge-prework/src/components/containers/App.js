import React from 'react';
import '../../assets/styles/App.css';
import Header from '../Header';
import WindowPlayer1 from '../WindowPlayer1';
import WindowPlayer2 from '../WindowPlayer2';
import ButtonLeft from '../ButtonLeft';
import ButtonRight from '../ButtonRight';
import Footer from '../Footer';
import PersonajeCard1 from '../PersonajeCard1';
import PersonajeCard2 from '../PersonajeCard2';


const App = () => (
  <div className="App">

    <Header />
    <WindowPlayer1 />
    <ButtonLeft />
    <PersonajeCard1 />
    <WindowPlayer2 />
    <ButtonRight />
    <PersonajeCard2 />
    <Footer />

  </div>

);


export default App;
