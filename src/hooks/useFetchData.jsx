import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchData = (requestConfig) => {
  const localRequestConfig = requestConfig || {};

  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  if (!localRequestConfig?.method) {
    localRequestConfig.method = 'GET';
  }

  useEffect(() => {
    if (localRequestConfig.url) {
      axios(localRequestConfig)
        .then((res) => {
          setState({
            loading: false,
            data: res.data?.data, // 응답 객체의 data 부분만 저장
            error: null,
          });
        })
        .catch((err) => {
          setState({
            loading: false,
            data: null,
            error: err,
          });
        });
    } else {
      setState({
        loading: false,
        data: null,
        error: new Error('No URL provided!'),
      });
    }
  }, [localRequestConfig]);

  return state;
};

export default useFetchData;