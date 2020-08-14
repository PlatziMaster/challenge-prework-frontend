import { ATTACK_HERO1, ATTACK_HERO2 } from './types';

const GeneralReducer = (state, action) => {
  switch (action.type) {
    case ATTACK_HERO1:
      return {
        ...state,
        lifeHero2: action.payload
      };
    case ATTACK_HERO2:
      return {
        ...state,
        lifeHero1: action.payload
      };
    default:
      return state;
  }
};

export default GeneralReducer;
