import styled from 'styled-components';
export const StyledContainer = styled.div`
  width: 45rem;
  height: 35rem;

  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
