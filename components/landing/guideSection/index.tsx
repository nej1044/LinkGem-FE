import * as S from './guideSection.styles';

const GuideSection = (props) => {
  return (
    <S.Wrapper>
      <S.Article>
        <S.TextWrapper>
          <S.sectionTitle>{props.title}</S.sectionTitle>
          <S.sectionText>{props.text}</S.sectionText>
        </S.TextWrapper>
        {props.sectionNumber === 1 && (
          <>
            <S.PinkBall>Ctrl+C</S.PinkBall>
            <S.GreyBall>Ctrl+V</S.GreyBall>
            <img />
            <img />
            <img />
            <div>
              <div></div>
              SAVE LINK
            </div>
          </>
        )}
        {props.sectionNumber === 1 && <></>}
        {props.sectionNumber === 1 && <></>}
      </S.Article>
    </S.Wrapper>
  );
};

export default GuideSection;
