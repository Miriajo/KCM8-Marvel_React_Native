import axios from 'axios';
import {BASE_URL, BASE_URL_COMICS, BASE_URL_CHARS} from '../config/api';
import {CREDENTIALS} from '../config/credentials';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'},
});

export const getComics = () => {
  const url = BASE_URL_COMICS + '?' + CREDENTIALS;
  return instance.get(url);
};

export const getCharacters = () => {
  const url = BASE_URL_CHARS + '?' + CREDENTIALS;
  instance.get(url);
};
