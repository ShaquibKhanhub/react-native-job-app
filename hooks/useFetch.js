import { useState, useEffect } from "react";
import axios from "axios";
import { mockJobs } from "../constants/mockJobs";

const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "x-rapidapi-key": "0c692a6d5fmsh89c4d779a043bf0p1c89b1jsndf3ab6587aa0",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      console.warn("Using mock data due to API error:", error.message);
      setData(mockJobs);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, error, isLoading, refetch };
};

export default useFetch;
useFetch;
