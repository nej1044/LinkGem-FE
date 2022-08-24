import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { gemboxModalState } from 'store/store';

export const getTotalLinkData = () => {
  const [totalData, setTotalData] = useState();
  const modalState = useRecoilValue(gemboxModalState);
  const fetchLinkData = async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          size: 10000,
          hasGembox: false,
        },
      });
      setTotalData(result?.data?.result?.contents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, [modalState]);

  return totalData;
};
