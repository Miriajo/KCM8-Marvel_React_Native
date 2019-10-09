import md5 from 'md5';

// Credentials for Marvel's API
const APIKEY = 'cf9a493d6ccd80de99f191903f8841b5';
const PRIVATEKEY = '99113a9df739e011dd14707e725af5d1b1e76e5c';
const TS = Date.now();
const HASH = md5(TS + PRIVATEKEY + APIKEY);
export const CREDENTIALS = 'ts=' + TS + '&apikey=' + APIKEY + '&hash=' + HASH;

// example credentials
