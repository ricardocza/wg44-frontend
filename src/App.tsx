import React from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import { UserProvider } from './context/UserContext';
import { TickerSection } from './components/TickerSection';
import { GraphSection } from './components/GraphSection';
import { GraphProvider } from './context/GraphContext';

function App() {
  return (
    <UserProvider>
      <GraphProvider>
        <GlobalStyle/>
        <Header></Header>
        <main>
          <TickerSection/>
          <GraphSection/>
        </main>
      </GraphProvider>
    </UserProvider>


    
  );
}

export default App;
