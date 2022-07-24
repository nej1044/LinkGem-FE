import axios from 'axios';

export default async function useLogin() {
  const auth =
    localStorage.getItem('auth') &&
    JSON.parse(localStorage.getItem('auth') as string);

  console.log('로컬 스토리지 auth');
  console.log(auth);
  try {
    if (auth?.accessToken && auth?.userPhase === 'REGISTERED') {
      await axios.get('/api/v1/oauth/login/naver', {
        params: {
          code: auth.accessToken,
        },
      });
      console.log('로그인 정보가 있습니다');
      return true;
    } else {
      console.log('로컬스토리지 정보가 없습니다');
    }
  } catch (error) {
    console.log('로그인 정보가 없습니다', error);
    return false;
  }

  return false;
}
