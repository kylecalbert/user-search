import React from 'react';
import { SmallText } from '../Text/Text';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';

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
      <SmallText text={'devfinder'} />
      <RightContainer
        text={theme === 'dark' ? 'Light' : 'Dark'}
        onClick={toggleTheme}
        data-testid={'toggle-btn'}
      >
        <SmallText text={theme === 'dark' ? 'Light' : 'Dark'} />

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
