import Landing from 'components/landing/landing';
import { useEffect, useState } from 'react';
import useLogin from 'utils/useLogin';

function Home() {
  const [isLogin, setIsLogin] = useState(false);
  console.log('isLogin', isLogin);

  useEffect(() => {
    setIsLogin(useLogin());
  }, []);
  return <>{isLogin ? <div>본편</div> : <Landing />}</>;
}

export default Home;
