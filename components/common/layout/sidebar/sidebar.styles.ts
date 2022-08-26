import styled from 'styled-components';

export const Sidebar = styled.ul`
  width: 13vw;
  min-width: 100px;
  padding-top: 12vh;
`;

export const ItemWrapper = styled.div`
  width: 160px;
  border-radius: 8px;
  background-color: #f3edff;
`;

export const SidebarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const ItemTitle = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
`;

export const GemboxList = styled.li`
  border-bottom: 1px solid #cecece;
`;

export const FilterTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  min-height: 30px;
  min-height: 16px;
  color: #1a1b1d;
  font-size: 1.35vw;
  font-weight: 500;
  letter-spacing: -0.02em;

  font-family: 'Poppins', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
`;

export const GemboxListTitle = styled(FilterTitle)`
  font-size: 1.2vw;
  padding: 0vh 1.6vw;
  border-radius: 1vw;
  background-color: #f3edff;
`;

export const GemboxItem = styled.ul`
  padding: 4vh 1.8vw;
`;

export const GemboxTitle = styled.li`
  cursor: pointer;
  padding-bottom: 2.1vh;
  font-size: 1.2vw;
  font-weight: 500;
  span {
    font-size: 0.9vw;
  }
`;

export const GemboxText = styled.li`
  cursor: pointer;
  padding-bottom: 2.6vh;
  font-size: 1.2vw;
  span {
    font-size: 0.9vw;
  }
`;

export const GemboxButton = styled.button`
  width: 100%;
  height: 4.6vh;
  min-height: 30px;
  border: none;
  border-radius: 0.8vw;
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1vw;
  font-weight: 500;
  color: #3c3c3f;
  letter-spacing: -0.02em;
`;

export const FilterText = styled(GemboxText)`
  display: flex;
  align-items: center;
`;

export const FilterList = styled.li`
  padding: 4vh 1.8vw;
`;
