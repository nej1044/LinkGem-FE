import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { gemboxRefetch } from 'store/store';

export const getTotalLinkCount = () => {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [boxRefetch] = useRecoilState(gemboxRefetch);
  const fetchLinkData = async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
      });
      setTotalCount(result?.data?.result?.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, [boxRefetch]);

  return totalCount;
};
