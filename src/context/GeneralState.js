import { useReducer } from 'react';

import GeneralContext from './GeneralContext';
import GeneralReducer from './GeneralReducer';
// import { } from './types'

const GeneralState = ({ children }) => {
  const initialState = {};

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
};

export default GeneralState;
