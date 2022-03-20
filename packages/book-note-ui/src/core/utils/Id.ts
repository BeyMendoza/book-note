const CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const generateID = (length = 10) => {
  let retVal = '';
  for (let i = 0, n = CHARSET.length; i < length; ++i) {
    retVal += CHARSET.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};
