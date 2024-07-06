import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      setIsLading(true);
      setData(null);
      setError(null);
      try {
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });
        if (response.ok) {
          const data = await response.json();
          data && setData(data);
        }
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.error(err);
          if (err instanceof Error) {
            setError(err);
          } else {
            const error = new Error('unknown error occurred', { cause: err });
            setError(error);
          }
        }
      } finally {
        setIsLading(false);
      }
    };

    getData();

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return { data, isLoading, error };
}
