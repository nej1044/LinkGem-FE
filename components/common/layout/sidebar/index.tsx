import GemboxSidebar from './gembox';
import { useRouter } from 'next/router';

const Sidebar = (props) => {
  const router = useRouter();
  const isGembox = router.asPath.split('/').includes('gembox');

  const selectMenu = (menu: string, url?: string) => () => {
    if (url) {
      router.push(`/${menu}/${url}`);
    } else {
      router.push(`/${menu}`);
    }
  };
  return <>{isGembox && <GemboxSidebar selectMenu={selectMenu} />}</>;
};

export default Sidebar;
