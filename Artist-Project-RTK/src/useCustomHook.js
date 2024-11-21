import { useState, useEffect } from 'react';
import http from './http-common';

const useCustomHook = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedData = async () => { 
      try {
        const res = await http.get(endpoint);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchedData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useCustomHook;