export default function useLogin(): boolean {
  if (typeof window !== 'undefined') {
    const auth =
      localStorage.getItem('auth') &&
      JSON.parse(localStorage.getItem('auth') as string);

    console.log('로컬 스토리지 auth');
    console.log(auth);
    if (
      auth?.accessToken &&
      auth?.userPhase === 'REGISTERED' &&
      auth?.loginEmail
    ) {
      console.log('로그인 정보가 있습니다');
      return true;
    } else {
      console.log('로컬스토리지 정보가 없습니다');
    }
    return false;
  }
  return false;
}
