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
  siteName: string;
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
  getLink: () => void;
}

export interface IRecentSaveProps {
  recentLink: TLinkSave[] | any;
  getLink: () => void;
  copyToClipboard: (url: string) => void;
  handleModal: (boo: boolean) => void;
}
