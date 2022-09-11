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
  hasMemo?: boolean;
};

export interface IPropsGembox {
  isFavorMenu?: boolean;
  hasMemo?: boolean;
}

export interface IPropsGemBoxUI {
  data?: IDataType[] | any;
  refetch: () => void;
  onClickPick: (el: ILinkDataType) => () => void;
  isDelete: boolean;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  isFavorMenu?: boolean;
}

export interface IPropsGemCard {
  selectedId?: number;
  el: IDataType;
  openEdit: (id: number) => () => void;
  openDelete: (id: number) => () => void;
  i: number;
}

export interface IPropsLinkCard {
  el: any;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  refetch: () => void;
  onClickPick: (el: ILinkDataType) => () => void;
  onClickCopyLink: (url: string) => () => void;
}

export interface IPropsGemboxStyles {
  error?: string;
  isChecked?: boolean;
  isMore?: boolean;
}
