import React from 'react';
import styled from 'styled-components';
import { sizes, fontWeight } from '../../constants/sizes';
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
export const SmallText = (text) => <Text size={sizes.small}>{text.text}</Text>;
export const MediumText = (text) => (
  <Text size={sizes.medium} fontWeight={fontWeight.bold}>
    {text.text}
  </Text>
);
export const LargeText = (text) => <Text size={sizes.large}>{text.text}</Text>;
