// UserSearch.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../Searchbar/Searchbar';
import GithubApi from '../../GithubApi';
export const StyledContainer = styled.div`
  width: 55rem;
  height: 32rem;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserSearch = () => {
  const [username, setUsername] = useState('');

  const handleSearch = (searchTerm) => {
    setUsername(searchTerm);
  };

  return (
    <StyledContainer>
      <SearchBar onSearch={handleSearch} />
      {username && <GithubApi username={username} />}
    </StyledContainer>
  );
};
