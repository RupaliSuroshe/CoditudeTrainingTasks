import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return { data, loading };
};
