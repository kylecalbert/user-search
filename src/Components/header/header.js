import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { IoMdSunny } from 'react-icons/io';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  & > *:first-child {
    margin-right: 0.5rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Text size="1.5rem">devfinder</Text>
      <RightContainer>
        <Text>Light</Text>
        <IconContainer>
          <IoMdSunny />
        </IconContainer>
      </RightContainer>
    </HeaderContainer>
  );
};
