import { useState, useEffect } from 'react';
import axios from 'axios';

export const getTotalLinkData = () => {
  const [totalData, setTotalData] = useState();
  const fetchLinkData = async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          size: 10000,
        },
      });
      setTotalData(result?.data?.result?.contents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, []);

  return totalData;
};
