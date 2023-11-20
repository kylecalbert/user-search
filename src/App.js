import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppContainer } from './App.styled';
import { UserSearch } from './Components/UserSearch/UserSearch';
import { Header } from './Components/Header/Header';
function App() {
  const client = new QueryClient();

  return (
    <AppContainer className="App">
      <QueryClientProvider client={client}>
        <UserSearch />
      </QueryClientProvider>
    </AppContainer>
  );
}

export default App;
