import Landing from 'components/landing/landing';
import useLogin from 'utils/useLogin';

function Home() {
  const isLogin = useLogin();
  console.log('isLogin', isLogin);
  return <>{isLogin ? <div>본편</div> : <Landing />}</>;
}

export default Home;
