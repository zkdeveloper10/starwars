import * as actionTypes from "../types";

const initialState = {
  count: null,
  characters: [],
  charactersFiltered: [],
  nextPage: null
};

const characters = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.SET_CHARACTERS:
      return {
        ...state,
        count: payload.count,
        characters: state.characters.concat(payload.results),
        nextPage: payload.next,
        charactersFiltered: state.characters.concat(payload.results)
      };
    case actionTypes.FILTER_CHARACTERS:
      console.log("FILTER_CHARACTERS", action);
      return {
        ...state,
        charactersFiltered: payload
      };
    default:
      return state;
  }
};

export default characters;
