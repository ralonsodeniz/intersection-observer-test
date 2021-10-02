export const createReducer = (functions) => (state, action) =>
  functions[action.type] ? functions[action.type](state, action) : state;
