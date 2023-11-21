// UserSearch.js
import React, { useState } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import GithubApi from '../../UserDetails/UserDetails';
import { Header } from '../Header/Header';

import { StyledContainer } from './UserSearch.styled';
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
