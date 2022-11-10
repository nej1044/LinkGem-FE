import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LinkContainer,
  ImageBox,
  LinkDetailBox,
  LinkDetailTitle,
  LinkDetailDescription,
  LinkDetailSetting,
  LinkDetailSettingDate,
  LinkDetailSettingOption,
  EtcButton,
  LinkEtcBox,
  LinkEtcButtonBox,
  LinkEtcButton,
  LinkEtcXButton,
  GemCrewLink,
  MemoImage,
} from './GemLink.style';
import { getDate } from 'utils/getDate';
import MemoIcon from 'components/gembox/moreIcons/memo';
import AddIcon from 'components/gembox/moreIcons/add';

import Axios from 'utils/Axios';
import { useQuery } from 'utils/useQuery';
import {
  Changebox,
  ChangeIcon,
  ChangeItem,
  GemBoxButton,
  ItemBox,
  Memobox,
  MemoClose,
  MemoOption,
  MemoText,
  MoreItem,
} from 'components/gembox/gembox.styles';
import SelectBoxPage from '../atom/select';
import { useMutation } from 'utils/useMutation';
import { useRecoilState } from 'recoil';
import { gemboxRefetch } from 'store/store';

interface GemLinkProps {
  title: string;
  description: string;
  memo: string;
  url: string;
  imageUrl: string;
  createDate: string;
  isFavorites: boolean;
  id: number;
  getLink: () => void;
  copyToClipboard: (url: string) => void;
  siteName?: string;
  gemGrewItem?: boolean;
  gemcrew?: string;
  gemBoxId?: string;
}
function GemLink({
  title,
  description,
  memo,
  url,
  imageUrl = '/images/test.jpeg',
  createDate,
  isFavorites,
  id,
  getLink,
  copyToClipboard,
  siteName,
  gemGrewItem,
  gemcrew,
  gemBoxId,
}: GemLinkProps) {
  const [isBookMark, setIsBookMark] = useState(isFavorites);
  const [isEtcCon, setIsEtcCon] = useState(false);
  const [memoOpen, setMemoOpen] = useState(false);
  const [isMemoView, setIsMemoView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [gembox, setGembox] = useState<any>(null);
  const [changeGembox] = useMutation('patch');
  // const [isMore, setIsMore] = useState<boolean>(false);
  const [, setBoxRefetch] = useRecoilState(gemboxRefetch);
  // const boxName = useQuery(`gemboxes/${gemBoxId || ''}`, {
  //   id: gemBoxId,
  // }).data?.name;
  const [boxName, setBoxName] = useState('');
  const { data } = useQuery('gemboxes');

  // const { data, refetch } = useQuery('links', params);

  const handleChange = (el: any) => () => {
    if (el.name === boxName) return;
    setGembox(el);
  };

  const onClickChangeGembox = async () => {
    await changeGembox(`links/${id}`, {
      id,
      gemBoxId: gembox.id,
    });
    // setIsMore(false);
    setIsEdit(false);
    setBoxRefetch(true);
    const response = await Axios(
      `https://dev.linkgem.co.kr/api/v1/gemboxes/${gembox}`,
      {
        method: 'get',
        // params: {
        //   id: gemBoxId,
        // },
      }
    );
    setBoxName(response?.data?.result.name);
  };

  const setClose = () => {
    setMemoOpen(false);
  };

  const handleFavorite = async () => {
    try {
      await Axios(`/api/v1/links/${id}`, {
        method: 'patch',
        data: { isFavorites: !isFavorites },
      });
      setIsBookMark(!isBookMark);
      getLink?.();
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleLinkDelete = async () => {
    try {
      await Axios(`/api/v1/links`, {
        method: 'delete',
        data: {
          ids: [id],
        },
      });
      setIsBookMark(!isBookMark);
      getLink?.();
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleEtcButton = () => {
    getLink?.();
    setIsEtcCon(!isEtcCon);
  };

  const handleGetGemBoxName = async () => {
    if (gemBoxId) {
      const response = await Axios(
        `https://dev.linkgem.co.kr/api/v1/gemboxes/${gemBoxId}`,
        {
          method: 'get',
          // params: {
          //   id: gemBoxId,
          // },
        }
      );
      setBoxName(response?.data?.result.name);
    }
  };

  useEffect(() => {
    handleGetGemBoxName();
  }, []);

  useEffect(() => {}, [isFavorites]);

  console.log('isEtcCon', isEtcCon);
  return (
    <LinkContainer>
      <ImageBox isEtcCon={isEtcCon}>
        <Link href={url || 'https://devlinkgem.netlify.app/'}>
          <a target="_blank">
            <img
              alt="link-image"
              src={imageUrl || 'images/home-link-default.svg'}
              width={320}
              height={180}
            />
          </a>
        </Link>
      </ImageBox>
      <LinkDetailBox isEtcCon={isEtcCon}>
        <LinkDetailTitle>
          <Link href={url || 'https://devlinkgem.netlify.app/'}>
            <a target="_blank">{title || siteName || url}</a>
          </Link>
        </LinkDetailTitle>
        <LinkDetailDescription>
          <Link href={url || 'https://devlinkgem.netlify.app/'}>
            <a target="_blank">{description}</a>
          </Link>
        </LinkDetailDescription>
        <LinkDetailSetting>
          <div>
            <LinkDetailSettingDate>
              {gemGrewItem ? (
                <GemCrewLink>
                  <img
                    src="/images/icons/gemcrewpick-icon.svg"
                    alt="gemcrewpick-icon"
                  />
                  <p>{gemcrew}</p>
                </GemCrewLink>
              ) : (
                getDate(createDate)
              )}
            </LinkDetailSettingDate>
            {memo !== '' && (
              <MemoImage
                src="/icons/memoIcon.jpg"
                onClick={() => setIsMemoView(true)}
              />
            )}
          </div>

          <LinkDetailSettingOption>
            <Image
              alt="link-image"
              src={
                isBookMark
                  ? '/images/icons/link-star-black.svg'
                  : '/images/icons/link-star.svg'
              }
              width={17}
              height={16}
              defaultValue={url}
              onClick={handleFavorite}
            />
            <Image
              alt="link-image"
              src="/images/icons/link-sharing.svg"
              width={15.79}
              height={15.82}
              onClick={() => copyToClipboard(url)}
            />
            <EtcButton onClick={handleEtcButton}>•••</EtcButton>
          </LinkDetailSettingOption>
        </LinkDetailSetting>
      </LinkDetailBox>
      {isEtcCon && (
        <LinkEtcBox>
          {/* <LinkEtcButton
              src="/images/icons/link-memo-icon.svg"
              alt="memo-img"
            />
            <span>메모</span> */}
          <MemoIcon
            el={{ memo, id }}
            refetch={getLink}
            open={memoOpen}
            setOpen={setMemoOpen}
            onClose={setClose}
          />
          {/* <LinkEtcButtonBox>
            <LinkEtcButton
              src="/images/icons/link-gemboxplus-icon.svg"
              alt="memo-img"
            />
            <span>잼박스 추가</span>
          </LinkEtcButtonBox> */}
          <AddIcon
            el={{ id, title }}
            refetch={getLink}
            open={addOpen}
            setOpen={setAddOpen}
            onClose={setClose}
          />
          <MoreItem onClick={() => setIsEdit(true)}>
            <ChangeIcon />
            잼박스변경
          </MoreItem>
          {/* <LinkEtcButtonBox>
            <LinkEtcButton
              src="/images/icons/link-gemboxchange-icon.svg"
              alt="memo-img"
            />
            <span>잼박스 변경</span>
          </LinkEtcButtonBox> */}
          <LinkEtcButtonBox>
            <LinkEtcButton
              src="/images/icons/link-trash-icon.svg"
              alt="memo-img"
              onClick={handleLinkDelete}
            />
            <span>삭제</span>
          </LinkEtcButtonBox>
          <LinkEtcXButton
            src="/images/icons/link-x.svg"
            alt="memo-img"
            onClick={() => setIsEtcCon(false)}
          />
        </LinkEtcBox>
      )}
      {isMemoView && (
        <Memobox>
          <MemoText>{memo}</MemoText>
          <MemoOption onClick={() => setMemoOpen(true)}>
            {memo.length >= 215 ? '전체보기' : '수정'}
          </MemoOption>
          <MemoClose onClick={() => setIsMemoView(false)} />
        </Memobox>
      )}
      <div style={{ display: 'none' }}>
        <MemoIcon
          el={{ memo, id }}
          refetch={getLink}
          open={memoOpen}
          setOpen={setMemoOpen}
          onClose={setClose}
        />
      </div>
      {isEdit && (
        <Changebox>
          <ChangeItem>
            현재 잼박스
            <ItemBox type="text" value={boxName || '기본'} disabled />
          </ChangeItem>
          <ChangeItem>
            변경할 잼박스
            <SelectBoxPage
              boxName={boxName}
              selectList={data?.contents}
              gembox={gembox}
              handleChange={handleChange}
            />
          </ChangeItem>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              height: '40px',
            }}
          >
            <GemBoxButton
              style={{
                padding: '11px 27px',
                fontSize: '14px',
                borderRadius: '8px',
                background: '#3C3C3F',
              }}
              onClick={() => setIsEdit(false)}
            >
              취소
            </GemBoxButton>
            <GemBoxButton
              onClick={onClickChangeGembox}
              style={{
                padding: '11px 63px',
                fontSize: '14px',
                borderRadius: '8px',
              }}
            >
              변경
            </GemBoxButton>
          </div>
        </Changebox>
      )}
    </LinkContainer>
  );
}

export default memo(GemLink);
