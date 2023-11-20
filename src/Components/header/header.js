import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text/Text';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > *:first-child {
    margin-right: 10px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Text size="1.5rem">devfinder</Text>
      <RightContainer>
        <Text>Light</Text>
        <Text>Icon</Text>
      </RightContainer>
    </HeaderContainer>
  );
};
