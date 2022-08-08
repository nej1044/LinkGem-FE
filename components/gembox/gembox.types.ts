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
  handleOpen: () => void;
  handleClose: () => void;
  data?: IDataType[] | any;
  linkData?: ILinkDataType[] | any;
  totalCount: number | undefined;
  gemboxTitle: string;
  setGembox: (el?: IDataType) => () => void;
}
