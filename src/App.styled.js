import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};

  height: 100vh;
  min-width: 100vw;

  @media (max-width: 768px) {
    height: 120vh;
    min-width: 120vw;
  }
`;
