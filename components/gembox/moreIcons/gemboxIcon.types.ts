import { Dispatch, SetStateAction } from 'react';

export interface IAddIconProps {
  el?: any;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  refetch: () => void;
}

export interface IMemoIconProps {
  el?: any;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  refetch: () => void;
}
