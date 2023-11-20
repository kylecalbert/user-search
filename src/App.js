import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContainer } from './App.styled';
import { UserSearch } from './Components/UserSearch/UserSearch';
import { ThemeProvider } from './Components/ThemeContext/ThemeContext';
function App() {
  const client = new QueryClient();

  return (
    <ThemeProvider>
      <AppContainer className="App">
        <QueryClientProvider client={client}>
          <UserSearch />
        </QueryClientProvider>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
