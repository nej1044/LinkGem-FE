export const localAuth: any = () => {
  if (typeof window !== 'undefined') {
    console.log('윈도우안');
    const localStorageAuth = localStorage.getItem('auth') as string;
    console.log('localStorageAuth');
    console.log(localStorageAuth);
    if (localStorageAuth) {
      const auth = JSON.parse(localStorageAuth);
      console.log('auth');
      console.log(auth);
      return auth;
    }
  }

  return null;
};
