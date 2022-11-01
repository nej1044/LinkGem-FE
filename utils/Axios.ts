import axios, { AxiosRequestConfig } from 'axios';
const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 300000,
});
declare module 'axios' {
  export interface AxiosRequestConfig {
    fileUpload?: boolean;
  }
}
Axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token: string | any =
      localStorage.getItem('accessToken') === null
        ? ''
        : localStorage.getItem('accessToken');
    config.headers = {
      'Authorization': token,
      'Content-type': config?.fileUpload
        ? 'multipart/form-data'
        : 'application/json; charset=utf-8',
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      error.response.status === 401 &&
      error.response.data.code === 'ACCESS_TOKEN_EXPIRED'
    ) {
      const originalRequest = error.config;
      let accessToken: string = '';
      let refreshToken: string = '';
      if (typeof window !== 'undefined') {
        accessToken = localStorage.getItem('accessToken') as string;
        refreshToken = localStorage.getItem('refreshToken') as string;
      }
      try {
        console.log('액세스토큰 재요청 해야합니다');
        const { data } = await axios.post(
          '/api/v1/user/oauth/reissue',
          {},
          {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          }
        );
        const { result } = data;
        const reAccessToken = result.accessToken;
        localStorage.setItem('accessToken', reAccessToken);
        originalRequest.headers = {
          Authorization: reAccessToken,
        };
        return axios(originalRequest);
      } catch (error: any) {
        // TODO : reissue 케이스 추가해야함
        console.error('리프레쉬 토큰 발급 에러', error);
        localStorage.clear();
        window.location.reload();
      }
    } else if (
      error.response.status === 400 &&
      error.response.data.code === 'Bad Request'
    ) {
      console.log('잘못된 요청입니다.');
      return Promise.reject(error);
    } else if (
      error.response.status === 401 &&
      (error.response.data.code === 'ACCESS_TOKEN_NOT_VALID' ||
        error.response.data.code === 'ACCESS_TOKEN_IS_EMPTY')
    ) {
      console.log('액세스 토큰이 유효하지 않습니다');
      localStorage.clear();
      window.location.reload();
    } else {
      localStorage.clear();
      // window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default Axios;
