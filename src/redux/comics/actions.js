import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';

export const setFetching = value => {
  return {
    type: types.COMICS_SET_FETCHING,
    value,
  };
};

export const updateList = value => {
  return {
    type: types.COMICS_UPDATE_LIST,
    value,
  };
};

export const updateItem = value => {
  return {
    type: types.COMICS_UPDATE_ITEM,
    value,
  };
};

export const fetchComicsList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const getComicsRes = await api.getComics();
      const comics = _.get(getComicsRes, 'data.data.results', []);

      dispatch(updateList(comics));
    } catch (e) {
      console.log('fetchComicsList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};

export const fetchSeriesList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetching(true));
      const getComicsRes = await api.getSeries();
      const comics = _.get(getComicsRes, 'data.data.results', []);

      dispatch(updateList(comics));
    } catch (e) {
      console.log('fetchComicsList err: ', e.message);
    } finally {
      dispatch(setFetching(false));
    }
  };
};
