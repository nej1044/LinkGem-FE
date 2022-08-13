import axios, { AxiosRequestConfig } from 'axios';
const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 300000,
});
declare module 'axios' {
  export interface AxiosRequestConfig {
    handlerEnabled?: boolean;
  }
}
Axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token: string | any =
      localStorage.getItem('accessToken') === null
        ? ''
        : localStorage.getItem('accessToken');
    console.log('토큰은', token);
    // config.headers['Authorization'] = `Bearer ${token}`
    config.headers = {
      Authorization: token,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    console.log('response');
    return response;
  },
  async (error) => {
    console.log('에러가 났습니다');
    console.log(error);
    const originalRequest = error.config;
    if (
      error.response.status === 400 &&
      error.response.data.code === 'ACCESS_TOKEN_EXPIRED'
    ) {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      console.log('액세스 토큰이 만료됐습니다');
      // originalRequest.headers['Authorization'] = {
      //   'ACCESS-TOKEN': accessToken,
      //   'REFRESH-TOKEN': refreshToken,
      // };
      console.log('originalRequest');
      console.log(originalRequest);
      try {
        const reissue = await axios.post(
          '/api/v1/oauth/reissue',
          {},
          {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          }
        );
        console.log(reissue);
        const { data } = reissue.data;
        console.log(data);
      } catch (error: any) {
        console.log('리프레쉬 토큰 발급 에러', error);
      }
    }

    return Promise.reject(error);
  }
);

export default Axios;
