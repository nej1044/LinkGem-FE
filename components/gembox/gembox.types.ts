import { Dispatch, SetStateAction } from 'react';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
};

export type ILinkDataType = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  createDate: string;
  isFavorites?: boolean;
  favorites?: boolean;
  url: string;
  memo: string;
  gemboxId: number;
};

export type IGemboxDataType = {};

export type ILinkParams = {
  gemBoxId?: string | number;
  size: number;
  isFavorites?: boolean;
  page: number;
};

export interface IPropsGembox {
  isFavorMenu?: boolean;
}

export interface IPropsGemBoxUI {
  data?: IDataType[] | any;
  linkData?: ILinkDataType[] | any;
  gemboxData?: IGemboxDataType[] | any;
  openCreate: (id?: number) => () => void;
  onClickPick: (el: ILinkDataType) => () => void;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  openMemo: (el: ILinkDataType) => () => void;
  defaultMemo: string;
  onClickMemo: (memo: string) => () => void;
  setId: Dispatch<SetStateAction<number>>;
  deleteLink: (id: number) => () => void;
  isFavorMenu?: boolean;
  totalCount: number | any;
}

export interface IPropsGemCard {
  selectedId: number;
  el: IDataType;
  openEdit: (id: number) => () => void;
  openDelete: (id: number) => () => void;
  i: number;
}

export interface IPropsGemboxModal {
  data: IDataType[] | any;
  selectedId?: number;
  openCreate: (id?: number) => () => void;
  defaultMemo: string;
  onClickMemo: (memo: string) => () => void;
}

export interface IPropsGemboxStyles {
  isChecked?: boolean;
  error?: string | boolean;
  isMore?: boolean;
}

export interface IPropsLinkCard {
  el: ILinkDataType;
  onClickPick: (el: ILinkDataType) => () => void;
  onClickCopyLink: (url: string) => () => void;
  openMemo: (el: ILinkDataType) => () => void;
  data?: IDataType[] | any;
  openCreate: (id?: number) => () => void;
  deleteLink: (id: number) => () => void;
}
