import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';

const useFetchData = (requestConfig) => {
  const localRequestConfig = useMemo(() => requestConfig || {}, [JSON.stringify(requestConfig)]);

  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!localRequestConfig.url) {
        setState({
          loading: false,
          data: null,
          error: new Error('No URL provided!'),
        });
        return;
      }

      setState((prevState) => ({ ...prevState, loading: true }));

      try {
        const response = await axios(localRequestConfig);
        setState({
          loading: false,
          data: response?.data.data,
          error: null,
        });
      } catch (err) {
        console.log(err);
        setState({
          loading: false,
          data: null,
          error: err,
        });
      }
    };

    fetchData();
  }, [localRequestConfig]);

  return state;
};

export default useFetchData;