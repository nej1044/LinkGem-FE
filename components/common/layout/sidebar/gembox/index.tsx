import {
  EllipsisOutlined,
  StarOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import GemCount from '../../../gemCount';
import * as S from '../sidebar.styles';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import { gemboxModalState } from 'store/store';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
};

const GemboxSidebar = (props) => {
  const router = useRouter();
  const [modalState, setModalState] = useRecoilState(gemboxModalState);
  const [data, setDate] = useState<IDataType[] | any>([]);
  const totalCount = getTotalLinkCount();

  const fetchData = async () => {
    try {
      const result = await axios.get('/api/v1/gemboxes', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
      });
      setDate(result?.data?.result.contents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [modalState]);

  return (
    <S.Sidebar>
      <S.GemboxList>
        <S.GemboxListTitle>
          MY GEM BOX
          <EllipsisOutlined
            style={{
              fontSize: '1.8vw',
              color: '#8E8E8E',
              cursor: 'pointer',
            }}
            onClick={() => setModalState({ ...modalState, open: true })}
          />
        </S.GemboxListTitle>
        <S.GemboxItem>
          <S.GemboxTitle onClick={props.selectMenu('gembox')}>
            전체
            <span>({totalCount})</span>
          </S.GemboxTitle>
          {data?.map((el: IDataType) => (
            <S.GemboxText
              key={uuidv4()}
              onClick={props.selectMenu('gembox', el?.id)}
            >
              {el?.name}
              <GemCount id={el.id} />
            </S.GemboxText>
          ))}
          <S.GemboxButton
            onClick={() =>
              setModalState({
                ...modalState,
                open: true,
                modalTitle: '잼박스 추가',
                boxState: 'isCreate',
              })
            }
          >
            + 잼박스 만들기
          </S.GemboxButton>
        </S.GemboxItem>
      </S.GemboxList>
      <S.FilterList>
        <S.FilterTitle>Filters</S.FilterTitle>
        <ul>
          <S.GemboxText
            onClick={() => {
              router.push('/gembox/favorite');
            }}
          >
            <StarOutlined
              style={{ fontSize: '1.1vw', marginRight: '0.3vw' }}
              color="#0F0223"
            />
            즐겨찾기
          </S.GemboxText>
          <S.GemboxText>
            <FileTextOutlined
              style={{ fontSize: '1vw', marginRight: '0.3vw' }}
              color="#0F0223"
              onClick={() => {
                router.push('/gembox/memo');
              }}
            />
            메모
          </S.GemboxText>
        </ul>
      </S.FilterList>
    </S.Sidebar>
  );
};

export default GemboxSidebar;
