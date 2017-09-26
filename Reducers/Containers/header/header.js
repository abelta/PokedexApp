import * as types from '../../../Actions/actionTypes';

const initialState = {
  movedDown: false,
  movedUp: false,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POKEMON_LIST_SCROLLED_DOWN: {
      return { movedDown: false, movedUp: true };
    }
    case types.POKEMON_LIST_SCROLLED_UP: {
      return { movedDown: true, movedUp: false };
    }
    default: return state;
  }
};

export default headerReducer;
