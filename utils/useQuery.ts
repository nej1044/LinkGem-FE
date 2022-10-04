import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfo } from 'store/store';

export const useQuery = (apiName: string, params?: object) => {
  const accessToken = useRecoilValue(userInfo).accessToken;
  const [state, setState] = useState<any>({
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    let unmounted = false;
    const source = axios.CancelToken.source();

    axios
      .get(`https://dev.linkgem.co.kr/api/v1/${apiName || ''}`, {
        cancelToken: source.token,
        headers: {
          Authorization: accessToken,
        },
        params,
      })
      .then((res) => {
        if (!unmounted) {
          setState({ ...state, data: res.data.result });
        }
      })
      .catch(() => {
        console.warn = console.log = () => {};
      });
    return () => {
      unmounted = true;
      source.cancel('cancle');
    };
  }, [trigger]);

  return { ...state, refetch };
};
