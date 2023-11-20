// UserSearch.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../Searchbar/Searchbar';
import GithubApi from '../../githubapi/GithubApi';
import { Header } from '../Header/Header';
export const StyledContainer = styled.div`
  width: 55rem;
  height: 35rem;
  background-color: blue;

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
      <Header />

      <SearchBar onSearch={handleSearch} />
      {username && <GithubApi username={username} />}
    </StyledContainer>
  );
};
