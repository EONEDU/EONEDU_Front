import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';

const useFetchMultipleData = (requestsConfig = []) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
    error: null,
  });

  const stableRequestsConfig = useMemo(() => requestsConfig, [JSON.stringify(requestsConfig)]);

  useEffect(() => {
    if (stableRequestsConfig.length === 0) {
      setState({
        loading: false,
        data: [],
        error: new Error('No requests provided!'),
      });
      return;
    }

    const fetchData = async () => {
      try {
        const results = await Promise.all(
          stableRequestsConfig.map((config) =>
            axios({
              ...config,
              method: config.method || 'GET',
              headers: {
                'Accept': 'application/json',
              },
            }).then(response => response.data?.data)
            .catch(error => {
              console.error(`Error fetching ${config.url}:`, error);
              return null;  // 오류 발생 시 null 반환
            })
          )
        );

        console.log('results:', results);

        setState({
          loading: false,
          data: results.filter(result => result !== null),
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
  }, [stableRequestsConfig]);

  return state;
};

export default useFetchMultipleData;