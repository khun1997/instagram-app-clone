import { useEffect, useState } from "react";

export type UserType = {
  id: number;
  firstName: string;
  image: string;
  users: string;
};

const useApiHook = () => {
  const url = "https://dummyjson.com/users";
  const [data, setData] = useState<UserType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);
  useEffect(() => {
    fetchApi();
  }, [url]);
  const fetchApi = async (): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.users);
  };
  if (loading) {
    setLoading(true);
  }
  if (error) {
    setError(error);
  }
  return { data, loading, error };
};

export default useApiHook;
