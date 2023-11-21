// App.styled.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};

  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    height: 100%;

    align-items: center;
  }
`;
