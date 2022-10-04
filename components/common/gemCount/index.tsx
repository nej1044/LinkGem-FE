import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfo } from 'store/store';

interface IPropsGemCount {
  id: number;
}

const GemCount = (props: IPropsGemCount) => {
  const accessToken = useRecoilValue(userInfo).accessToken;
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let unmounted = false;
    const source = axios.CancelToken.source();

    axios
      .get(`/api/v1/links`, {
        cancelToken: source.token,
        headers: {
          Authorization: accessToken,
        },
        params: {
          gemBoxId: props.id,
        },
      })
      .then((res) => {
        if (!unmounted) {
          setCount(res?.data.result.totalCount);
        }
      })
      .catch(() => {
        console.warn = console.log = () => {};
      });
    return () => {
      unmounted = true;
      source.cancel('cancle');
    };
  }, []);

  return <span>({count})</span>;
};

export default GemCount;
