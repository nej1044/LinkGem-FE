import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState, memo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { gemboxModalState } from 'store/store';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import GemboxUI from './gembox.presenter';
import {
  IDataType,
  ILinkDataType,
  ILinkParams,
  IPropsGembox,
} from './gembox.types';

const Gembox = (props: IPropsGembox) => {
  const router = useRouter();
  const [data, setDate] = useState<IDataType[] | any>([]);
  const [linkData, setLinkData] = useState<object[]>([]);
  const [gemboxData, setGemboxData] = useState<object[]>([]);
  const [modalState, setModalState] = useRecoilState(gemboxModalState);
  const [isFavorites, setIsFavorites] = useState<boolean>(false);
  const [startPage, setStartPage] = useState<number>(1);
  const [current, setCurrent] = useState<number>(1);
  const [id, setId] = useState<number>(0);
  const [defaultMemo, setDefaultMemo] = useState<string>('');

  const fetchData = useCallback(async () => {
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
  }, []);

  const fetchGembox = useCallback(async () => {
    try {
      const result = await axios.get(
        `/api/v1/gemboxes/${router.query.gemBoxId}`,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
          },
          params: {
            id: Number(router.query.gemBoxId),
          },
        }
      );
      setGemboxData(result?.data?.result);
    } catch (error) {
      console.log(error);
    }
  }, [router.query.gemBoxId]);

  const params: ILinkParams = {
    size: 24,
    page: current - 1,
  };

  if (router.query.gemBoxId) params.gemBoxId = Number(router.query.gemBoxId);
  if (props.isFavorMenu) params.isFavorites = true;

  const fetchLinkData = useCallback(async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params,
      });
      setLinkData(result?.data?.result);
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  const totalCount = getTotalLinkCount();

  const openCreate = (id?: number) => () => {
    if (data.length === 8) return;
    setModalState({
      ...modalState,
      modalTitle: '잼박스 추가',
      boxState: 'isCreate',
    });
  };

  const openMemo = (el: ILinkDataType) => () => {
    if (el?.memo !== 'string') {
      setDefaultMemo(el?.memo);
    } else {
      setDefaultMemo('');
    }
    setId(el?.id);
    setModalState({
      ...modalState,
      modalTitle: '잼키퍼 메모장',
      boxState: 'isMemo',
    });
  };

  const onClickPick = (el: ILinkDataType) => async () => {
    setIsFavorites((prev) => !prev);
    try {
      await axios.patch(
        `api/v1/links/${el?.id}`,
        {
          id: el?.id,
          isFavorites: !el?.isFavorites,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onClickMemo = (memo: string) => async () => {
    try {
      await axios.patch(
        `api/v1/links/${id}`,
        {
          id,
          memo,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
          },
        }
      );
      setModalState({
        ...modalState,
        boxState: '',
        modalTitle: 'MY GEMBOX',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = (id: number) => async () => {
    const ids = [id];
    try {
      await axios.delete('api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        data: {
          ids,
        },
      });
      setModalState({
        ...modalState,
        boxState: '',
        modalTitle: 'MY GEMBOX',
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchGembox();
    fetchLinkData();
  }, [router, isFavorites, current, modalState]);

  return (
    <GemboxUI
      data={data}
      linkData={linkData}
      openCreate={openCreate}
      onClickPick={onClickPick}
      current={current}
      setCurrent={setCurrent}
      startPage={startPage}
      setStartPage={setStartPage}
      openMemo={openMemo}
      setId={setId}
      onClickMemo={onClickMemo}
      defaultMemo={defaultMemo}
      deleteLink={deleteLink}
      gemboxData={gemboxData}
      isFavorMenu={props.isFavorMenu}
      totalCount={totalCount}
    />
  );
};

export default memo(Gembox);
