import styled from 'styled-components';

export const StyledSearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledSearchInput = styled.input`
  display: flex;
  height: 3rem;
  background: none;
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  border-radius: 0.3rem;
`;
export const IconContainer = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 10px;
  font-size: 25px;
  margin-top: 0.25rem;
  @media (max-width: 768px) {
    top: 36.5%;
    left: 10px;
  }
`;

export const SearchButton = styled.button`
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;
