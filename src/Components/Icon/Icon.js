import React from 'react';
import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
`;

export const Icon = () => {
  return <IconContainer></IconContainer>;
};
