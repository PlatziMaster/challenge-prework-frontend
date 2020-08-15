import { useReducer } from 'react';

import GeneralContext from './GeneralContext';
import GeneralReducer from './GeneralReducer';
import {
  ATTACK_HERO1,
  ATTACK_HERO2,
  SET_WINNER,
  DELETE_WINNER,
  RESTART_LIFE
} from './types';

const GeneralState = ({ children }) => {
  const initialState = {
    lifeHero1: 100,
    lifeHero2: 100,
    winner: ''
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  // Attack Hero 1
  const attackHero1 = (lifeRemain) => {
    dispatch({
      type: ATTACK_HERO1,
      payload: lifeRemain
    });
  };

  // Attack Hero 2
  const attackHero2 = (lifeRemain) => {
    dispatch({
      type: ATTACK_HERO2,
      payload: lifeRemain
    });
  };

  const setWinner = (winner) => {
    dispatch({
      type: SET_WINNER,
      payload: winner
    });
  };

  const deleteWinner = (winner) => {
    dispatch({
      type: DELETE_WINNER,
      payload: ''
    });
  };

  const restartLife = () => {
    dispatch({
      type: RESTART_LIFE,
      payload: 100
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        attackHero1,
        attackHero2,
        setWinner,
        deleteWinner,
        restartLife,
        lifeHero1: state.lifeHero1,
        lifeHero2: state.lifeHero2,
        winner: state.winner
      }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
