export const tob64 = (str) => {
  return btoa(unescape(encodeURIComponent(str)));
};

export const fromb64 = (str) => {
  return decodeURIComponent(escape(atob(str)));
};

export const getAuthValue = (header) => {
  return header.split(" ")[1];
};

export const getAuthValueDecoded = (header) => {
  return fromb64(getAuthValue(header));
};
