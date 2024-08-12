import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchMultipleData = (requestsConfig = []) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    if (requestsConfig.length === 0) {
      setState({
        loading: false,
        data: [],
        error: new Error('No requests provided!'),
      });
      return;
    }

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          requestsConfig.map((config) =>
            axios({
              ...config,
              method: config.method || 'GET',
            })
          )
        );

        setState({
          loading: false,
          data: responses.map((res) => res.data?.data), // 각 응답 객체의 data 부분만 저장
          error: null,
        });
      } catch (err) {
        setState({
          loading: false,
          data: [],
          error: err,
        });
      }
    };

    fetchData();
  }, [requestsConfig]);

  return state;
};

export default useFetchMultipleData;