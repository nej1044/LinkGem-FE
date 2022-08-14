import axios from 'axios';
import { useEffect, useState } from 'react';

interface IPropsGemCount {
  id: number;
}

const GemCount = (props: IPropsGemCount) => {
  const [count, setCount] = useState<number>(0);
  const fetchData = async () => {
    try {
      const result = await axios.get(`/api/v1/links`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          gemBoxId: props.id,
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

  return <span>({count})</span>;
};

export default GemCount;
