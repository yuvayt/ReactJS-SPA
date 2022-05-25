import { useEffect, useState } from "react";
import axios from "axios";

const GetAPI = (initialData, url, mapData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: url,
    })
      .then(({ data }) => {
        if (!didCancel) {
          setData(mapData(data));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!didCancel) {
          setLoading(false);
          setError(err);
        }
      });

    return () => {
      didCancel = true;
    };
  }, [mapData, url]);

  return {
    data,
    loading,
    error,
  };
};

export default GetAPI;
