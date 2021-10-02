import { useCallback, useReducer } from "react";

export const useReducerThunk = (reducer, INITIAL_STATE) => {
  const [state, baseDispatch] = useReducer(reducer, INITIAL_STATE);
  const dispatch = useCallback((action) => {
    if (typeof action === "function") return action(dispatch);
    baseDispatch(action);
  }, []);

  return [state, dispatch];
};
