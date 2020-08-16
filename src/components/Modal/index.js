import { useContext } from 'react';
import GeneralContext from 'context/GeneralContext';

import {
  Background,
  Container,
  ImageContainer,
  TextContainer,
  Heading,
  Winner,
  Button
} from './styles.js';

export const Modal = ({ title, image }) => {
  const generalContext = useContext(GeneralContext);
  const { winner, deleteWinner, restartLife } = generalContext;

  const handlerClick = () => {
    //  get the button for hero 1
    const attackBtnH1 = document.getElementById('attack-btn-h1');
    // get the modal & bg
    const bg = document.querySelector('#background');
    const md = document.querySelector('#modal');
    // Hide Modal
    bg.style.display = 'none';
    md.classList.remove('animated');
    // Activate the turn
    attackBtnH1.disabled = false;
    // Change the state
    deleteWinner();
    restartLife();
  };

  return (
    <>
      <Background id='background'>
        <Container id='modal'>
          <ImageContainer>
            <img
              src={
                image
                  ? image
                  : 'https://media.giphy.com/media/FMapondVtL2Fi/giphy.gif'
              }
              alt={title}></img>
          </ImageContainer>
          <TextContainer>
            <Heading>The winner is:</Heading>
            <Winner>{winner}</Winner>
            <Button onClick={handlerClick}>
              <span>Play Again</span>
            </Button>
          </TextContainer>
        </Container>
      </Background>
    </>
  );
};
