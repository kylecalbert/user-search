import React from 'react';
import styled from 'styled-components';
import { sizes, fontWeight } from '../../constants/sizes';
const textStyles = {
  smallText: {
    fontSize: sizes.small,
  },
  mediumText: {
    fontSize: sizes.medium,
    fontWeight: fontWeight.bold,
  },
  largeText: {
    fontSize: sizes.large,
    fontWeight: fontWeight.bold,
  },
};

const StyledText = styled.div`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => textStyles[props.variant]?.fontSize || '1rem'};
  font-weight: ${(props) => textStyles[props.variant]?.fontWeight || 'normal'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export const Text = ({ variant, children, ...props }) => {
  return (
    <StyledText variant={variant} {...props}>
      {children}
    </StyledText>
  );
};
