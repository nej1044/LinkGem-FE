import styled from 'styled-components';

export default styled.div`
  /* padding: 276px 0;
  font-family: Poppins;
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  .context {
    color: white;
    letter-spacing: -0.02em;
    &__top {
      font-weight: 700;
      font-size: 48px;
      line-height: 150%;
    }
  } */

  body {
    background: #42455a;
  }
  section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section:nth-child(1) {
    color: #e0ffff;
  }
  section:nth-child(2) {
    color: #42455a;
    background: #e0ffff;
  }
  section:nth-child(3) {
    color: #e0ffff;
  }
  section:nth-child(4) {
    color: #42455a;
    background: #e0ffff;
  }
  section .container {
    margin: 100px;
  }
  section h1 {
    font-size: 3rem;
    margin: 20px;
  }
  section h2 {
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  section .text-container {
    display: flex;
  }
  section .text-container .text-box {
    margin: 20px;
    padding: 20px;
    background: #00c2cb;
  }
  section .text-container .text-box h3 {
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    section h1 {
      font-size: 2rem;
      text-align: center;
    }
    section .text-container {
      flex-direction: column;
    }
  }

  .reveal {
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: 1s all ease;
  }

  .reveal.active {
    transform: translateY(0);
    opacity: 1;
  }
`;
