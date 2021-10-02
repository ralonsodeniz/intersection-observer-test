import { get } from 'application/http/axios';
import { requestDelay } from 'application/http/utils/request-delay';

export const getCategory = async url => {
  const result = await requestDelay(() => get(url));
  const [response] = result;
  const { status, reason: { message } = {}, value: { data } = {} } = response;
  if (status === 'rejected') throw Error(message);
  return data;
};
