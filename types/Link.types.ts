import { Dispatch, SetStateAction } from 'react';

export type TLinkSave = {
  createDate: string;
  description: string;
  id: number;
  imageUrl: string;
  isFavorites: boolean;
  memo: string;
  title: string;
  updateDate: string;
  url: string;
  userId: number;
  userNickname: string;
};

export type TLocalStorageAuth = {
  accessToken: string;
  id: number;
  loginEmail: string;
  mailEmail: string;
  name: string;
  nickname: string;
  refreshToken: string;
  userPhase: string;
};

export interface ILinkSaveProps {
  recentLink: TLinkSave[] | any;
  setRecentLink: Dispatch<SetStateAction<TLinkSave[]>>;
}

export interface IRecentSaveProps {
  recentLink: TLinkSave[] | any;
  getLink: () => void;
}
