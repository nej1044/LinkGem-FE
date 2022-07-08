import styled from 'styled-components';
import Clip161 from '../../../public/icons/clip-161.svg';
import Clip162 from '../../../public/icons/clip-162.svg';
import Clip163 from '../../../public/icons/clip-163.svg';
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
  height: 800px;
  color: white;
  overflow: hidden;
  background-color: #0f0223;
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 50%;
`;

export const TextWrapper = styled.div`
  width: 406px;
  height: 150px; ;
`;

export const sectionTitle = styled.h2`
  font-weight: 800;
  font-size: 48px;
  letter-spacing: -2%;
  word-break: keep-all;
  font-family: 'Poppins', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  }
`;

export const sectionText = styled.span`
  font-size: 24px;
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
  width: 600px;
  height: 450px;
  overflow: visible;
`;

export const PinkBall = styled.div`
  position: absolute;
  top: 60px;
  width: 181px;
  height: 181px;
  line-height: 181px;
  text-align: center;
  background-color: #ff04c8;
  border-radius: 50%;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: -0.02em;
`;

export const GreyBall = styled(PinkBall)`
  top: 120px;
  left: 140px;
  background-color: #262626;
`;

export const BlueBall = styled(PinkBall)`
  position: relative;
  top: 240px;
  left: 210px;
  width: 410px;
  height: 205px;
  background-color: #5200ff;
  transform: rotate(-46.45deg);
  border-radius: 0px 0px 205px 205px;
`;

export const DoughnutBall = styled(PinkBall)`
  top: -1px;
  left: 102.5px;
  width: 205px;
  height: 102.5px;
  background-color: #0f0223;
  margin: 0 auto;
  border-radius: 0px 0px 102.5px 102.5px;
`;

export const SaveLinkText = styled.div`
  transform: translate(0px, 70px);
`;

export const GreenClip = styled(Clip161)`
  z-index: 2;
  transform: translate(40px, -185px) rotate(50deg);
`;

export const PinkClip = styled(Clip162)`
  z-index: 1;
  transform: translate(-20px, -150px) rotate(40deg);
`;

export const GreyClip = styled(Clip163)`
  transform: translate(-70px, -160px) rotate(50deg);
`;

export const SolidLine = styled.div`
  width: 545px;
  height: 405px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  transform: rotate(-18deg);
`;

export const DottedLine = styled(SolidLine)`
  border: 1px dashed #ffffff;
`;

export const Star = styled(Star169)`
  width: 41px;
  height: 41px;
  transform: translate(490px, -490px);
`;

export const BlackGem = styled(Gem1)`
  position: relative;
  top: -370px;
  left: 100px;
  z-index: 1;
`;

export const GreenGem = styled(Gem2)`
  transform: translate(70px, -370px);
`;

export const YellowGem = styled(Gem3)`
  position: absolute;
  top: 190px;
  left: 80px;
`;

export const PinkGem = styled(Gem4)`
  position: absolute;
  top: 190px;
  left: 280px;
`;

export const Memo = styled(MemoSVG)`
  transform: translate(190px, -300px);
`;

export const Clock = styled(ClockSVG)`
  position: relative;
  z-index: 1;
`;
