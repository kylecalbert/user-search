import styled from "styled-components";
export const StyledContainer = styled.div`
  width: 45rem;
  height: 35rem;

  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 28rem;
  }
  @media (max-width: 640px) {
    width: 22rem;
  }
`;
