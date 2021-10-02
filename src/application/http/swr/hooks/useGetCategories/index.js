import useSWR from "swr";
import { getCategories } from "./handler";

export const useGetCategories = () => {
  const { data, error } = useSWR(process.env.REACT_APP_API_URL, getCategories);

  return { isLoading: !data && !error, data, error };
};
