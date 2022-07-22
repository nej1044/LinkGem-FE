import styled from 'styled-components';
import Star169 from '../../../public/icons/star-169.svg';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  color: white;
  font-size: calc(0.35vw + 8.74px)
  overflow: hidden;
  background-color: #0f0223;
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 50vh;
`;

export const TextWrapper = styled.div`
  width: 30vw;
  min-width: 390px;
`;

export const sectionTitle = styled.h2`
  margin-bottom: 8px;
  font-weight: 800;
  line-height: 55px;
  font-size: 45px;
  letter-spacing: -2%;
  word-break: keep-all;
  font-family: 'Poppins';
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
`;

export const sectionText = styled.span`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -2%;
  word-break: keep-all;
  font-family: SpoqaHanSansNeo;
  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export const ArticleContent = styled.div`
  position: relative;
  width: 50%;
  min-width: 450px;
  height: 100%;
  overflow: visible;
`;

export const PinkBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: #ff04c8;
  border-radius: 100%;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: -0.02em;
  animation: bounce 2s infinite;
  animation-delay: 2s;
  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }
    50% {
      transform: translate3d(0px, -4px, 0);
    }
    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }
`;

export const GreyBall = styled(PinkBall)`
  top: 80px;
  left: 80px;
  background-color: #262626;
  animation: bounce 2s infinite;
  animation-delay: 2.5s;
`;

export const BlueBall = styled(PinkBall)`
  display: block;
  position: relative;
  top: 150px;
  left: 250px;
  width: 300px;
  height: 150px;
  text-align: center;
  background-color: #5200ff;
  transform: rotate(-46.45deg);
  border-radius: 0px 0px 150px 150px;
  animation: none;
`;

export const DoughnutBall = styled(PinkBall)`
  top: -1px;
  left: 70px;
  width: 150px;
  height: 72.5px;
  background-color: #0f0223;
  margin: 0 auto;
  border-radius: 0px 0px 72.5px 72.5px;
  animation: none;
`;

export const SaveLinkText = styled.div`
  transform: translate(0, 480%);
`;

export const GreenClip = styled.img`
  width: 35%;
  transform: translate(50%, -40%) rotate(50deg);
  animation: green-bounce 2s infinite;
  animation-delay: 2s;
  @keyframes green-bounce {
    0% {
      transform: translate(50%, -40%) rotate(50deg);
    }
    50% {
      transform: translate(50%, -45%) rotate(50deg);
    }
    100% {
      transform: translate(50%, -40%) rotate(50deg);
    }
  }
`;

export const PinkClip = styled.img`
  width: 35%;
  transform: translate(0%, -20%) rotate(40deg);
  animation: pink-bounce 2s infinite;
  animation-delay: 2.5s;
  @keyframes pink-bounce {
    0% {
      transform: translate(0%, -20%) rotate(40deg);
    }
    50% {
      transform: translate(0%, -25%) rotate(40deg);
    }
    100% {
      transform: translate(0%, -20%) rotate(40deg);
    }
  }
`;

export const GreyClip = styled.img`
  width: 25%;
  transform: translate(-80%, -30%) rotate(30deg);
  animation: grey-bounce 2s infinite;
  animation-delay: 1s;
  @keyframes grey-bounce {
    0% {
      transform: translate(-80%, -30%) rotate(30deg);
    }
    50% {
      transform: translate(-80%, -35%) rotate(30deg);
    }
    100% {
      transform: translate(-80%, -30%) rotate(30deg);
    }
  }
`;

export const SolidLine = styled.div`
  position: absolute;
  left: 50px;
  width: 430px;
  height: 280px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  transform: rotate(-15deg);
`;

export const DottedLine = styled(SolidLine)`
  position: absolute;
  left: 0;
  border: 1px dashed #ffffff;
`;

export const Star = styled(Star169)`
  position: absolute;
  top: 0px;
  left: 410px;
  width: 40px;
  height: 40px;
`;

export const BlackGem = styled.img`
  position: absolute;
  top: 40px;
  left: 170px;
  z-index: 1;
  width: 120px;
  animation: black-gem-bounce 2s infinite;
  animation-delay: 1s;
  @keyframes black-gem-bounce {
    0% {
      top: 40px;
      left: 170px;
    }
    50% {
      top: 20px;
      left: 170px;
    }
    100% {
      top: 40px;
      left: 170px;
    }
  }
`;

export const GreenGem = styled.img`
  position: absolute;
  top: 20px;
  left: 270px;
  width: 130px;
  animation: green-gem-bounce 2s infinite;
  animation-delay: 2s;
  @keyframes green-gem-bounce {
    0% {
      top: 20px;
      left: 270px;
    }
    50% {
      top: 0px;
      left: 270px;
    }
    100% {
      top: 20px;
      left: 270px;
    }
  }
`;

export const YellowGem = styled.img`
  position: absolute;
  top: 140px;
  left: 110px;
  width: 130px;
  animation: yellow-gem-bounce 2s infinite;
  animation-delay: 1.6s;
  @keyframes yellow-gem-bounce {
    0% {
      top: 140px;
      left: 110px;
    }
    50% {
      top: 120px;
      left: 110px;
    }
    100% {
      top: 140px;
      left: 110px;
    }
  }
`;

export const PinkGem = styled.img`
  position: absolute;
  top: 130px;
  left: 250px;
  width: 120px;
  animation: pink-gem-bounce 2s infinite;
  animation-delay: 1.3s;
  @keyframes pink-gem-bounce {
    0% {
      top: 130px;
      left: 250px;
    }
    50% {
      top: 110px;
      left: 250px;
    }
    100% {
      top: 130px;
      left: 250px;
    }
  }
`;

export const Memo = styled.img`
  position: relative;
  width: 250px;
  left: 60px;
  animation: aaa-bounce 2s infinite;
  animation-delay: 1.5s;
  @keyframes aaa-bounce {
    0% {
      top: 0%;
      right: 0%;
    }
    50% {
      top: 5%;
      right: 0%;
    }
    100% {
      top: 0%;
      right: 0%;
    }
  }
`;

export const Clock = styled.img`
  position: relative;
  left: 100px;
  z-index: 1;
  width: 200px;
  animation: clock-bounce 2s infinite;
  animation-delay: 1s;
  @keyframes clock-bounce {
    0% {
      top: 0%;
      right: 0%;
    }
    50% {
      top: 5%;
      right: 0%;
    }
    100% {
      top: 0%;
      right: 0%;
    }
  }
`;
