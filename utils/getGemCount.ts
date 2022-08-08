import axios from 'axios';
import { useEffect, useState } from 'react';

export const getGemCount = (id: number) => {
  const [count, setCount] = useState<number>(0);
  const fetchData = async () => {
    try {
      const result = await axios.get(`/api/v1/links`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          gemBoxId: id,
        },
      });
      setCount(result?.data?.result?.totalCount);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return count;
};
