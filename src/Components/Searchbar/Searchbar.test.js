import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Searchbar from './Searchbar';
describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<Searchbar />);
    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });

  it('updates searchTerm on input change', () => {
    render(<Searchbar />);
    const searchBar = screen.getByTestId('search-bar');

    fireEvent.change(searchBar, { target: { value: 'oktocat' } });

    expect(searchBar.value).toBe('oktocat');
  });
});
