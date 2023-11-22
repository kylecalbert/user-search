import styled from 'styled-components';
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const RightContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  background: none;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.text === 'Dark'
        ? 'rgba(0, 128, 128, 0.1)'
        : 'rgba(255, 69, 0, 0.1)'};
  }

  & > *:first-child {
    margin-right: 0.5rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
`;
