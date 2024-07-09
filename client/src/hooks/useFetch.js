import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    };

    fetchApiData();
  }, [endpoint]);

  return { data };
};

export default useFetch;
