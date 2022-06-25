import styled from 'styled-components';

export default styled.div`
  background-color: #1a1b1d;
  padding: 35px 240px;
  position: fixed;
  bottom: 0;
  width: calc(100% - 480px);
  display: flex;
  justify-content: space-between;
  .company-info {
    display: flex;
    flex-direction: column;
    color: white;
    font-family: Poppins;
    font-weight: 800;
    font-size: 24px;
    color: white;
    &__linkgem {
      margin-bottom: 8px;
    }
    &__copyright {
      font-weight: 400;
      font-size: 14px;
      letter-spacing: -0.02em;
    }
    &__privacy {
      button {
        background-color: inherit;
        border: none;
        color: white;
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
  .txt-r {
    text-align: end;
  }
`;
