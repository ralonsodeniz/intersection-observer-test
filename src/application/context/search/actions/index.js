import { SEARCH } from '../types';

export const setCategory = category => ({
  type: SEARCH.CATEGORY,
  payload: category,
});

export const setError = error => ({
  type: SEARCH.ERROR,
  payload: error,
});

export const setItem = item => ({
  type: SEARCH.ITEM,
  payload: item,
});
