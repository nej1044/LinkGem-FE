import { Dispatch, SetStateAction } from 'react';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
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
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  data?: IDataType[] | any;
  linkData?: ILinkDataType[] | any;
  totalCount: number | undefined;
  gemboxTitle: string;
  setGembox: (el?: IDataType) => () => void;
}

export interface IPropsGemCard {
  editId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  el: IDataType;
  openEdit: (id: number) => () => void;
}

export interface IPropsGemboxModal {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
  data: IDataType[] | any;
  editId?: number;
}
