import styled from 'styled-components';
export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  width: 90%;
  height: 70%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin-top: 2rem;
`;

export const TopContainer = styled.div``;

export const MiddleContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: repeat(3, 1fr);

  width: 80%;
  background-color: ${(props) => props.theme.background};
  height: 5rem;
  border-radius: 0.5rem;
  & > *:first-child {
    margin-left: 1.2rem;
  }
`;

export const GridItems = styled.div`
  & > *:first-child {
    margin-bottom: 10px;
  }
`;

export const BottomContainer = styled.div`
  background: blue;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;

  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  & > *:first-child {
    margin-right: 0.5rem;
  }
`;
