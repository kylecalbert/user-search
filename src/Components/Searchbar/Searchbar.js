import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { StyledSearchContainer, StyledSearchInput } from './Searchbar.styled';
import { SearchIcon } from './Searchbar.styled';

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
      <StyledSearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </StyledSearchContainer>
  );
};

export default SearchBar;
