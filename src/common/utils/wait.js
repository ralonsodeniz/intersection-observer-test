export const waitPromise = (time = 500) =>
  new Promise(resolve => setTimeout(resolve, time));
