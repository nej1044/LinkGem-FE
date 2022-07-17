import { useEffect, useState } from 'react';
import IAuthInfo from 'types/IAuthInfo.type';

export default () => {
  const [localStorageAuth, setLocalStorageAuth] = useState('');
  const [auth, setAuth] = useState<IAuthInfo>({
    accessToken: '',
    id: '',
    nickname: '',
    refreshToken: '',
  });

  const getAuth = () => {
    if (typeof window !== 'undefined') {
      setLocalStorageAuth(localStorage.getItem('auth') as string);
    }
    if (localStorageAuth) {
      setAuth(JSON.parse(localStorageAuth));
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  return auth;
};
