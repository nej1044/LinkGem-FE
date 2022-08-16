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
  isFavorites: boolean;
  url: string;
};

export type ILinkParams = {
  gemBoxId?: string | number;
  size: number;
  isFavorites?: boolean;
  page: number;
};

export interface IPropsGemBoxUI {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  data?: IDataType[] | any;
  linkData?: ILinkDataType[] | any;
  totalCount: number | any;
  gemboxTitle: string;
  setGembox: (el?: IDataType) => () => void;
  totalData: IDataType[] | any;
  openCreate: () => void;
  onClickPick: (el: ILinkDataType) => () => void;
  onClickFavor: () => void;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}

export interface IPropsGemCard {
  selectedId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  el: IDataType;
  openEdit: (id: number) => () => void;
  openDelete: (id: number) => () => void;
  totalData: IDataType[] | any;
  i: number;
}

export interface IPropsGemboxModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
  data: IDataType[] | any;
  selectedId?: number;
  totalData: IDataType[] | any;
  openCreate: () => void;
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
}
