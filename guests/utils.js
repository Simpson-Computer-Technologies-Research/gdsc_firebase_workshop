export const tob64 = (str) => {
  return btoa(unescape(encodeURIComponent(str)));
};
