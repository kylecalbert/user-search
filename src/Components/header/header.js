import React from 'react';
import { Text } from '../Text/Text';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';

import { useTheme } from '../../ThemeContext/ThemeContext';
import { MediumText } from '../Text/Text';
import { HeaderContainer, IconContainer } from './Header.styled';
import { RightContainer } from './Header.styled';
import { sizes } from '../../constants/sizes';
export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <MediumText text={'devfinder'} />
      <RightContainer onClick={toggleTheme}>
        <Text color={theme.text}>{theme === 'dark' ? 'Light' : 'Dark'}</Text>
        <IconContainer>
          {theme === 'dark' ? <IoMdSunny /> : <FaMoon />}
        </IconContainer>
      </RightContainer>
    </HeaderContainer>
  );
};
