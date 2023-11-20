import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';

import { useTheme } from '../ThemeContext/ThemeContext';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const RightContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  background: none;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  & > *:first-child {
    margin-right: 0.5rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
`;

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Text color={theme.text} size="1.5rem">
        devfinder
      </Text>
      <RightContainer onClick={toggleTheme}>
        <Text color={theme.text}>{theme === 'dark' ? 'Light' : 'Dark'}</Text>
        <IconContainer>
          {theme === 'dark' ? <IoMdSunny /> : <FaMoon />}
        </IconContainer>
      </RightContainer>
    </HeaderContainer>
  );
};
