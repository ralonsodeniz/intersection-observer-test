import useSWR from 'swr';
import { getCategory } from './handler';

export const useGetCategory = (url) => {
  const { data, error } = useSWR(url, getCategory);

  return { isLoading: !data && !error, data, error };
};
