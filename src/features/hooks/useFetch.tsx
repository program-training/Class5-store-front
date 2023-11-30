import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T,>(url: string): [boolean, Error | null, null | T] => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<null | T>(null);
  useEffect(() => {
    setPending(true);
    axios
      .get(url)
      .then(({ data }) => {
        setPending(false);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setPending(false);
        setError(error);
        setData(null);
      });
  }, []);
  return [pending, error, data];
};

export default useFetch;
