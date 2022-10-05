import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userInfo } from 'store/store';

export const getTotalLinkData = () => {
  const accessToken = useRecoilValue(userInfo).accessToken;
  const [totalData, setTotalData] = useState([]);
  const fetchLinkData = async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization: accessToken,
        },
        params: {
          hasGembox: false,
        },
      });
      setTotalData(result?.data?.result?.contents);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, []);

  return totalData;
};
