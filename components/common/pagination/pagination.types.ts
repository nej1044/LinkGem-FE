import { Dispatch, SetStateAction } from 'react';

export interface IPagination {
  count: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  setCurrent: Dispatch<SetStateAction<number>>;
  current: any;
}

export interface IPaginationUI {
  onClickPrevPage: () => void;
  startPage: number;
  lastPage: number;
  current: any;
  onClickPage: (page: number) => () => void;
  onClickNextPage: () => void;
}

export interface IPaginationStyled {
  current: boolean;
}
