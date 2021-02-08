export const delay = (fn: () => void, time: number = 300) => {
  setTimeout(fn.bind(null), time);
};
