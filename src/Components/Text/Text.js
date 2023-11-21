import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.size || '0.9rem'};
  font-weight: ${(props) => props.fontWeight || 'semi-bold'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;
export const Text = ({ ...props }) => {
  return <StyledText {...props}></StyledText>;
};
