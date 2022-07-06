import Main from '../components/landing/main/main.container';
import styled from 'styled-components';
import GuideSection from '../components/landing/guideSection';

function Home() {
  return (
    <HomeBlock>
      <Main />
      <GuideSection
        sectionNumber={1}
        title="복사 붙여넣기 하나로 링크 저장 끝!"
        text="공유 받은 링크, 내가 직점 찾은 링크 등 내게 필요한 링크를 복.붙만 하면 저장 완료"
      />
      <GuideSection
        sectionNumber={2}
        title="언제나 찾기 쉽도록 잼박스로 관리"
        text="나만의 잼박스를 만들어 뒤죽박죽 링크들을 깔끔하게 정리"
      />
      <GuideSection
        sectionNumber={3}
        title="알람, 메모 기능으로 꼼꼼스킬 LEVEL UP!"
        text="링크에 간단한 메모를 남기거나 알람을 설정하여 꼼꼼하게 관리"
      />
    </HomeBlock>
  );
}

const HomeBlock = styled.div`
  width: 100%;
  font-family: Rammetto One;
  background-color: #0f0223;
`;

export default Home;
