import { Dispatch, SetStateAction } from 'react';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
};

export type ILinkDataType = {
  imageUrl: string;
  title: string;
  description: string;
  createDate: string;
};

export interface IPropsGemBoxUI {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  data?: IDataType[] | any;
  linkData?: ILinkDataType[] | any;
  totalCount: number | undefined;
  gemboxTitle: string;
  setGembox: (el?: IDataType) => () => void;
  totalData: IDataType[] | any;
  openCreate: () => void;
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
}

export interface IPropsLinkCard {
  el: ILinkDataType;
}
