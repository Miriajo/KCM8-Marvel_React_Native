import md5 from 'md5';

// Credentials for Marvel's API
const APIKEY = 'YOUR API KEY';
const PRIVATEKEY = 'YOUR PRIVATE KEY';
const TS = Date.now();
const HASH = md5(TS + PRIVATEKEY + APIKEY);
export const CREDENTIALS = 'ts=' + TS + '&apikey=' + APIKEY + '&hash=' + HASH;

// example credentials
