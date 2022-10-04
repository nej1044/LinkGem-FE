import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { gemboxRefetch, userInfo } from 'store/store';

export const getTotalLinkCount = () => {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [boxRefetch, setBoxRefetch] = useRecoilState(gemboxRefetch);
  const accessToken = useRecoilValue(userInfo).accessToken;
  const fetchLinkData = async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization: accessToken,
        },
      });
      setTotalCount(result?.data?.result?.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinkData();

    return () => setBoxRefetch(false);
  }, [boxRefetch]);

  return totalCount;
};
