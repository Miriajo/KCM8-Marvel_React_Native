import axios from 'axios';
import {
  BASE_URL,
  BASE_URL_COMICS,
  BASE_URL_SERIES,
  BASE_URL_CHARS,
} from '../config/api';
import {CREDENTIALS} from '../config/credentials';
//import qs from 'qs';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'},
});

export const getComics = () => {
  const url = `${BASE_URL_COMICS}?${CREDENTIALS}`;
  return instance.get(url);
};

export const getSeries = () => {
  const url = `${BASE_URL_SERIES}?${CREDENTIALS}`;
  return instance.get(url);
};

export const getComicCharacters = params => {
  //const paramsStringify = qs.stringify(params, {skipNulls: true});
  const url = `${BASE_URL_COMICS}/${params}/${BASE_URL_CHARS}?${CREDENTIALS}`;

  return instance.get(url);
};

export const getCharacters = () => {
  const url = `${BASE_URL_CHARS}?${CREDENTIALS}`;
  return instance.get(url);
};
