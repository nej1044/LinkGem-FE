import GemboxSidebar from './gembox';
import { useRouter } from 'next/router';
import * as S from './sidebar.styles';
import { sidebarFormData } from './form';
import { v4 as uuidv4 } from 'uuid';
import { IItem } from './sidebar.types';

const Sidebar = () => {
  const router = useRouter();
  const isGembox = router.asPath.split('/').includes('gembox');
  const current: string = router.asPath.split('/')[1];

  const selectMenu = (menu: string, url?: string | number) => () => {
    if (url) {
      router.push(`/${menu}/${url}`);
    } else {
      router.push(`/${menu}`);
    }
  };
  return (
    <>
      {isGembox ? (
        <GemboxSidebar selectMenu={selectMenu} />
      ) : (
        <S.Sidebar>
          <S.ItemWrapper>
            {sidebarFormData[current]?.map((item: IItem) => (
              <S.Item key={uuidv4()} onClick={selectMenu(item.url)}>
                <S.SidebarIcon src={item.icon} alt="setting-icon" />
                <S.ItemTitle>{item.title}</S.ItemTitle>
              </S.Item>
            ))}
          </S.ItemWrapper>
        </S.Sidebar>
      )}
    </>
  );
};

export default Sidebar;
