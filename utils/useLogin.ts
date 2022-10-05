export default function useLogin(): boolean {
  if (typeof window !== 'undefined') {
    const auth =
      localStorage.getItem('auth') &&
      JSON.parse(localStorage.getItem('auth') as string);
    if (
      auth?.accessToken &&
      auth?.userPhase === 'REGISTERED' &&
      auth?.loginEmail
    ) {
      localStorage.setItem('name', auth.name);
      return true;
    } else {
      console.log('로컬스토리지 정보가 없습니다');
    }
    return false;
  }
  return false;
}
