import styled from 'styled-components';

export default styled.div`
  overflow: hidden;
  width: 100%;
  padding: 17px 0;
  background: #1a1b1d;

  .ticker-news {
    width: 7000px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: Poppins;
    span {
      margin-right: 24px;
      font-weight: 500;
      font-size: 20px;
    }
  }

  .ticker-news > * {
    display: inline-block;
    /* animation: news 30s infinite linear; */
  }

  @keyframes news {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-4135px);
    }
  }
`;
