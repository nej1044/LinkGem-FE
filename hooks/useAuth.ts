export const localAuth: any = () => {
  if (typeof window !== 'undefined') {
    const localStorageAuth = localStorage.getItem('auth') as string;
    if (localStorageAuth) {
      const auth = JSON.parse(localStorageAuth);
      return auth;
    }
  }

  return null;
};
