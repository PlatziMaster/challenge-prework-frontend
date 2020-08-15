import {
  ATTACK_HERO1,
  ATTACK_HERO2,
  SET_WINNER,
  DELETE_WINNER,
  RESTART_LIFE
} from './types';

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
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    case DELETE_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    case RESTART_LIFE:
      return {
        ...state,
        lifeHero1: action.payload,
        lifeHero2: action.payload
      };
    default:
      return state;
  }
};

export default GeneralReducer;
