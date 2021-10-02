import { waitPromise } from 'common/utils/wait';

export const requestDelay = async request =>
  await Promise.allSettled([request(), waitPromise()]);
