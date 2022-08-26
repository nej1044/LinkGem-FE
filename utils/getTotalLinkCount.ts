import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const getTotalLinkCount = () => {
  const [totalCount, setTotalCount] = useState();
  const fetchLinkData = useCallback(async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
      });
      setTotalCount(result?.data?.result?.totalCount);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchLinkData();
  }, []);

  return totalCount;
};
