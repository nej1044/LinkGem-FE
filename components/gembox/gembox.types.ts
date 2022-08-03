export type IDataType = {
  id: number;
  name: string;
};

export interface IPropsGemBoxUI {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  data?: IDataType[] | any;
  totalCount: number;
}
