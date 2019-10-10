import * as types from './types';

const initialState = {
  list: [],
  item: null,
  isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.COMICS_UPDATE_LIST:
      return {
        ...state,
        list: action.value,
      };

    case types.COMICS_UPDATE_ITEM:
      return {
        ...state,
        item: action.value,
      };

    case types.COMICS_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
