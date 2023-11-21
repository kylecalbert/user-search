import styled from 'styled-components';

export const SocialInfoContainer = styled.div`
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
