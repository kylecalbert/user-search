// UserSearch.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../Searchbar/Searchbar';
import GithubApi from '../../UserDetails/UserDetails';
import { Header } from '../Header/Header';
export const StyledContainer = styled.div`
  width: 45rem;
  height: 35rem;
  background-color: blue;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserSearch = () => {
  const [username, setUsername] = useState('');

  return (
    <StyledContainer>
      <Header />

      <SearchBar
        onSearch={(searchTerm) => {
          setUsername(searchTerm);
        }}
      />
      {username && <GithubApi username={username} />}
    </StyledContainer>
  );
};
