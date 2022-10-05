import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userInfo } from 'store/store';

export const useMutation = (method: string) => {
  const accessToken = useRecoilValue(userInfo).accessToken;
  const mutation = async (apiName: string, params?: object) => {
    if (method === 'patch') {
      try {
        const result = await axios.patch(
          `https://dev.linkgem.co.kr/api/v1/${apiName}`,
          params,
          {
            headers: {
              Authorization: accessToken,
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
              Authorization: accessToken,
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
              Authorization: accessToken,
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
