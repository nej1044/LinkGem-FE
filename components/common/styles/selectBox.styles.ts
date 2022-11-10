import styled from 'styled-components';

export const SelectWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ededed;
  margin-top: 10px;
  padding: 10px 16px;
  font-size: 12px;
  cursor: pointer;

  img {
    width: 9px;
    height: 4px;
  }
`;

export const ListWrapper = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 15 !important;
  top: 45px;
  left: 0;
  width: 100%;
  max-height: 159px;
  border-radius: 8px;
  border: 1px solid #ededed;
  background: #ffffff;
`;

export const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
  cursor: pointer;

  :hover,
  :focus {
    color: #5200ff;
  }

  ${(props: { isColor: boolean }) =>
    props.isColor && {
      color: '#5200FF',
    }}
`;

export const DefaultItem = styled.div``;

// const ItemInput = styled(MenuItem)`
//   :visited {
//     color: #5200ff;
//     background-color: #f3edff;
//   }
//   :focus {
//     color: #5200ff;
//     background-color: #f3edff;
//   }
//   :hover {
//     color: #5200ff;
//     background-color: #f3edff;
//   }
// `;
