import React from 'react';
import styled from 'styled-components';
import { Text } from '../Components/Text/Text';

const StyledContainer = styled.div`
  display: flex;
`;
export const SocialInfo = ({ icon, text }) => {
  return (
    <StyledContainer>
      <Text>{text}</Text>
      <Text>{icon}</Text>
    </StyledContainer>
  );
};
