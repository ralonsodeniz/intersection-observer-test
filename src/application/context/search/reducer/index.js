import { SEARCH } from '../types';
import { createReducer } from '../../utils/reducer';

export const INITIAL_STATE = {
  category: null,
  item: null,
  error: null,
};

const states = {
  [SEARCH.ITEM]: (state, action) => ({
    ...state,
    item: action.payload,
    error: null,
  }),
  [SEARCH.ERROR]: (state, action) => ({
    ...state,
    results: null,
    error: action.payload,
  }),
  [SEARCH.CATEGORY]: (state, action) => ({
    ...state,
    category: action.payload,
  }),
};

export default createReducer(states);

export const selectCategory = ({ category }) => category;
export const selectError = ({ error }) => error;
export const selectItem = ({item}) => item;
