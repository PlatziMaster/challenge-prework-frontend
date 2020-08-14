import { useReducer } from 'react';

import GeneralContext from './GeneralContext';
import GeneralReducer from './GeneralReducer';
import { ATTACK_HERO1, ATTACK_HERO2 } from './types';

const GeneralState = ({ children }) => {
  const initialState = {
    lifeHero1: 100,
    lifeHero2: 100
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

  return (
    <GeneralContext.Provider
      value={{
        attackHero1,
        attackHero2,
        lifeHero1: state.lifeHero1,
        lifeHero2: state.lifeHero2
      }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
