import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { StyledSearchContainer, StyledSearchInput } from './searchbar.styled';
import { SearchButton, SearchIcon } from './searchbar.styled';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <StyledSearchContainer onSubmit={handleSubmit}>
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
      <StyledSearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </StyledSearchContainer>
  );
};

export default SearchBar;
