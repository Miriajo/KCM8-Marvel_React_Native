import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

const LIMIT = 8;

export const setFetching = value => {
  return {
    type: types.CHARACTERS_SET_FETCHING,
    value,
  };
};

export const updateList = (list, total) => {
  return {
    type: types.CHARACTERS_UPDATE_LIST,
    list: list,
    total: total,
  };
};

export const updateItem = value => {
  return {
    type: types.CHARACTERS_UPDATE_ITEM,
    value,
  };
};

export const updateOffset = value => {
  return {
    type: types.CHARACTERS_UPDATE_OFFSET,
    value,
  };
};

// INIT AND UPDATE CHARACTER LIST FILTERING BY COMIC
export const initComicCharactersList = () => {
  return async dispatch => {
    dispatch(updateList([], 0));
    dispatch(updateOffset(0));
    dispatch(fetchComicCharactersList());
  };
};

export const updateComicCharactersListOffset = () => {
  return async (dispatch, getState) => {
    const {offset} = getState().characters;
    const newOffset = offset + LIMIT;
    dispatch(updateOffset(newOffset));
    dispatch(fetchComicCharactersList());
  };
};

// INIT AND UPDATE FULL CHARACTER LIST
export const initCharactersList = () => {
  return async dispatch => {
    dispatch(updateList([], 0));
    dispatch(updateOffset(0));
    dispatch(fetchCharactersList());
  };
};

export const updateCharactersListOffset = () => {
  return async (dispatch, getState) => {
    const {offset} = getState().characters;
    const newOffset = offset + LIMIT;
    dispatch(updateOffset(newOffset));
    dispatch(fetchCharactersList());
  };
};

export const fetchComicCharactersList = () => {
  return async (dispatch, getState) => {
    const comic = getState().comics.item;
    if (!comic) {
      return;
    }

    try {
      const params = _.get(comic, 'id');
      dispatch(setFetching(true));
      const getComicCharactersRes = await api.getComicCharacters(params);

      const list = _.get(getComicCharactersRes, 'data.data.results', []);
      const total = parseInt(
        _.get(getComicCharactersRes, 'data.data.total', 0),
      );

      dispatch(updateList(list, total));
    } catch (e) {
      console.log('fetchComicCharactersList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

export const fetchCharactersList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const getCharactersRes = await api.getCharacters();
      const list = _.get(getCharactersRes, 'data.data.results', []);
      const total = _.get(getCharactersRes, 'data.data.total', 0);

      dispatch(updateList(list, total));
    } catch (e) {
      console.log('fetchCharactersList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

// POST CHARACTER MANUALY IN LOCAL DUE TO THIS API DOESN'T HAVE POST OPTIONS
export const postCharacter = data => {
  return (dispatch, getState) => {
    const comic = getState().comics.item;
    if (!comic) {
      return;
    }

    try {
      dispatch(setFetching(true));

      const postCharacterRes = data;

      // OPT 1:
      const {total, list} = getState().characters;
      const newTotal = total + 1;
      const newList = [...list, postCharacterRes];
      dispatch(updateList(newList, newTotal));

      if (postCharacterRes) {
        Actions.pop();
      }
    } catch (e) {
      console.log('postCharacter error: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
