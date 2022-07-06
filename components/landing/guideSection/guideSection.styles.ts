import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
  color: white;
  background-color: #0f0223;
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 50%;
`;

export const TextWrapper = styled.div`
  width: 406px;
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

export const PinkBall = styled.div`
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
  background-color: #262626;
`;
