import styled from 'styled-components';

export const StyledSearchContainer = styled.form`
  display: flex;
  align-items: center;

  border-radius: 10px;

  width: 100%;
`;

export const StyledSearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  height: 2.5rem;

  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  padding: 0.5rem;
`;
