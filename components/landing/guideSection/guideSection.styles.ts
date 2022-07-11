import styled from 'styled-components';
import Star169 from '../../../public/icons/star-169.svg';
import Gem1 from '../../../public/icons/gem-1.svg';
import Gem2 from '../../../public/icons/gem-2.svg';
import Gem3 from '../../../public/icons/gem-3.svg';
import Gem4 from '../../../public/icons/gem-4.svg';
import MemoSVG from '../../../public/icons/memo.svg';
import ClockSVG from '../../../public/icons/clock.svg';

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
`;

export const sectionTitle = styled.h2`
  font-weight: 800;
  font-size: 3vw;
  letter-spacing: -2%;
  word-break: keep-all;
  font-family: 'Poppins', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  }
`;

export const sectionText = styled.span`
  font-size: 1.65vw;
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
  height: 100%;
  overflow: visible;
`;

export const PinkBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30%;
  height: 50%;
  background-color: #ff04c8;
  border-radius: 100%;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 1.65vw;
  letter-spacing: -0.02em;
`;

export const GreyBall = styled(PinkBall)`
  top: 25%;
  left: 20%;
  background-color: #262626;
`;

export const BlueBall = styled(PinkBall)`
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 45%;
  text-align: center;
  background-color: #5200ff;
  transform: rotate(-46.45deg);
  border-radius: 0px 0px 205px 205px;
`;

export const DoughnutBall = styled(PinkBall)`
  top: -1px;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: #0f0223;
  margin: 0 auto;
  border-radius: 0px 0px 102.5px 102.5px;
`;

export const SaveLinkText = styled.div`
  transform: translate(0, 420%);
`;

export const GreenClip = styled.img`
  width: 35%;
  transform: translate(50%, -40%) rotate(50deg);
`;

export const PinkClip = styled.img`
  width: 35%;
  transform: translate(0%, -20%) rotate(40deg);
`;

export const GreyClip = styled.img`
  width: 25%;
  transform: translate(-80%, -30%) rotate(30deg);
`;

export const SolidLine = styled.div`
  width: 95%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ffffff;
  transform: rotate(-18deg);
`;

export const DottedLine = styled(SolidLine)`
  border: 1px dashed #ffffff;
`;

export const Star = styled(Star169)`
  position: absolute;
  top: -2%;
  right: 12%;
  width: 14%;
  height: 14%;
`;

export const BlackGem = styled(Gem1)`
  position: absolute;
  top: -15%;
  left: 25%;
  z-index: 1;
  width: 25%;
`;

export const GreenGem = styled(Gem2)`
  position: absolute;
  top: -20%;
  right: 25%;
  width: 30%;
`;

export const YellowGem = styled(Gem3)`
  position: absolute;
  top: 20%;
  left: 15%;
  width: 30%;
`;

export const PinkGem = styled(Gem4)`
  position: absolute;
  top: 18%;
  right: 30%;
  width: 25%;
`;

export const Memo = styled(MemoSVG)`
  width: 50%;
`;

export const Clock = styled(ClockSVG)`
  position: relative;
  left: 8%;
  z-index: 1;
  width: 40%;
`;
