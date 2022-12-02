import styled from 'styled-components';

export const LinkSaveWrapper = styled.div`
  width: 100%;

  .link-save-wrapper {
    width: 100%;
    h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #000000;
    }

    .link-url {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 16px;
      border: 1px solid #616163;
      border-radius: 4px;
      display: flex;
      align-items: center;

      input {
        width: 100%;

        border-style: none;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        /* or 22px */
        letter-spacing: -0.02em;

        font-weight: 400;
        font-size: 16px;
        line-height: 140%;

        letter-spacing: -0.02em;
        color: #8e8e8e;
        &:focus {
          outline: none;
        }
      }
    }
    .btn-group {
      display: flex;
      gap: 8px;

      button {
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 4px;

        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #ffffff;
      }
      .cancel-btn {
        flex-grow: 1;
        background: #616163;
        border: none;
      }
      .save-btn {
        flex-grow: 2;
        background: #5200ff;
        border: 1px solid #5200ff;
      }
    }
  }
`;
