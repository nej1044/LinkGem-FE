import React from 'react';
import styled from 'styled-components';

function Index() {
  return <TestStyledComponentBlock>awd</TestStyledComponentBlock>;
}

export default Index;

const TestStyledComponentBlock = styled.div`
  background-color: red;
  height: 200px;
  width: 100%;
`;
