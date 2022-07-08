import * as S from './guideSection.styles';

const GuideSection = (props) => {
  return (
    <S.Wrapper>
      <S.Article>
        <S.TextWrapper>
          <S.sectionTitle>{props.title}</S.sectionTitle>
          <S.sectionText>
            {props.text.split('\n').map((line: string) => {
              return (
                <span key={line}>
                  {line}
                  <br />
                </span>
              );
            })}
          </S.sectionText>
        </S.TextWrapper>
        {props.sectionNumber === 1 && (
          <S.ArticleContent>
            <S.PinkBall>Ctrl+C</S.PinkBall>
            <S.GreyBall>Ctrl+V</S.GreyBall>
            <S.BlueBall>
              <S.DoughnutBall></S.DoughnutBall>
              <S.SaveLinkText>SAVE LINK</S.SaveLinkText>
              <S.GreenClip />
              <S.PinkClip />
              <S.GreyClip />
            </S.BlueBall>
          </S.ArticleContent>
        )}
        {props.sectionNumber === 2 && (
          <S.ArticleContent>
            <S.SolidLine>
              <S.DottedLine />
            </S.SolidLine>
            <S.Star />
            <S.BlackGem />
            <S.GreenGem />
            <S.YellowGem />
            <S.PinkGem />
          </S.ArticleContent>
        )}
        {props.sectionNumber === 3 && (
          <S.ArticleContent>
            <S.Clock />
            <S.Memo />
          </S.ArticleContent>
        )}
      </S.Article>
    </S.Wrapper>
  );
};

export default GuideSection;
