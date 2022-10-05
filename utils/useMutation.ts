import axios from 'axios';

export const useMutation = (method: string) => {
  const mutation = async (apiName: string, params?: object) => {
    if (method === 'patch') {
      try {
        const result = await axios.patch(
          `https://dev.linkgem.co.kr/api/v1/${apiName}`,
          params,
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
            },
          }
        );
        return result;
      } catch (error) {
        console.error(error);
      }
    }
    if (method === 'post') {
      try {
        const result = await axios.post(
          `https://dev.linkgem.co.kr/api/v1/${apiName}`,
          params,
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
            },
          }
        );
        return result;
      } catch (error) {
        console.error(error);
      }
    }
    if (method === 'delete') {
      try {
        const result = await axios.delete(
          `https://dev.linkgem.co.kr/api/v1/${apiName}`,
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
            },
            data: params,
          }
        );
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return [mutation];
};
