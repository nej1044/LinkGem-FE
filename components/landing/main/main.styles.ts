import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93vh;
  color: white;
  background-color: #0f0223;
`;

export const Title = styled.h1`
  text-align: center;
  color: #41fb6a;
  font-size: 100px;
  letter-spacing: -2%;
`;

export const TitleRemark = styled.span`
  padding: 24px 0;
  text-align: center;
  font-size: 24px;
  letter-spacing: -2%;
  line-height: 150%;
`;

export const MainButton = styled.button`
  width: 260px;
  height: 80px;
  border-radius: 100px;
  background-color: #5200ff;
  outline: none;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -2%;
`;
