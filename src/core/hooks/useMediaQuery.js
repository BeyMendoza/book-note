export const useMediaQuery = () => {
  return query => {
    return window.matchMedia(query).matches;
  };
};
