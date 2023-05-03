// import { UserType } from "./useApiHook";
import { useEffect, useState } from "react";

export type UserType = {
  id: number;
  firstName: string;
  image: string;
  users:string
};
const useApiHook = () => {
  const [data, setData] = useState<UserType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async (): Promise<any> => {
    const response = await fetch("https://dummyjson.com/users");
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
