import React from 'react';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';
import { Text } from '../Text/Text';
import { useTheme } from '../../ThemeContext/ThemeContext';
import {
  HeaderContainer,
  IconContainer,
  RightContainer,
} from './Header.styled';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Text variant={'largeText'}>devfinder</Text>

      <RightContainer
        text={theme === 'dark' ? 'Light' : 'Dark'}
        onClick={toggleTheme}
        data-testid={'toggle-btn'}
      >
        <Text>{theme === 'dark' ? 'Light' : 'Dark'}</Text>

        <IconContainer>
          {theme === 'dark' ? (
            <IoMdSunny data-testid="sunny-icon" />
          ) : (
            <FaMoon data-testid="moon-icon" />
          )}
        </IconContainer>
      </RightContainer>
    </HeaderContainer>
  );
};
