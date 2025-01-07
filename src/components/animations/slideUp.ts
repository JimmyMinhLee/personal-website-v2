export const slideUp = {
  initial: {
    opacity: 0,
  },
  // @ts-ignore
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: 0.01 * i },
  }),
  // @ts-ignore
  closed: {
    y: 1,
    opacity: 0,
    transition: { duration: 1.5 },
  },
};
