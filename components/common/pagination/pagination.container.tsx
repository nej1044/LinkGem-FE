import PaginationUI from './pagination.presenter';
import { IPagination } from './pagination.types';

const Pagination = (props: IPagination) => {
  const lastPage = Math.ceil(props.count / 24);

  const onClickPrevPage = () => {
    if (props.startPage === 1) return;
    props.setStartPage((prev) => prev - 10);
    props.setCurrent(props.current - 10);
  };

  const onClickNextPage = () => {
    if (props.startPage + 10 > lastPage) return;
    props.setStartPage((prev) => prev + 10);
    props.setCurrent(props.current + 10);
  };

  const onClickPage = (page: number) => () => {
    props.setCurrent(page);
  };

  return (
    <PaginationUI
      startPage={props.startPage}
      lastPage={lastPage}
      current={props.current}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
};

export default Pagination;
