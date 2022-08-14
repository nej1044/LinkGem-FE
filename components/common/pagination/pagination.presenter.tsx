import * as S from './pagination.styles';
import { IPaginationUI } from './pagination.types';
import { v4 as uuidv4 } from 'uuid';

const PaginationUI = (props: IPaginationUI) => {
  return (
    <S.ListFooter>
      <S.PrevArrow
        onClick={props.onClickPrevPage}
        disabled={props.startPage === 1}
      />
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Pages
              key={uuidv4()}
              onClick={props.onClickPage(props.startPage + index)}
              current={props.startPage + index === props.current}
            >
              {props.startPage + index}
            </S.Pages>
          )
      )}
      <S.NextArrow
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 > props.lastPage}
      />
    </S.ListFooter>
  );
};
export default PaginationUI;
