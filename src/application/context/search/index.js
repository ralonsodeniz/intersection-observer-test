import { createContext, useContext, useMemo } from 'react';
import searchReducer, { INITIAL_STATE } from './reducer';
import { useReducerThunk } from '../hooks/use-reducer-thunk';

const StateContext = createContext(null);
const DispatchContext = createContext(null);
export const useSearchDispatch = () => useContext(DispatchContext);
export const useSearchSelector = selector => {
  const state = useContext(StateContext);
  return useMemo(() => selector(state), [selector, state]);
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducerThunk(searchReducer, INITIAL_STATE);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default SearchProvider;
