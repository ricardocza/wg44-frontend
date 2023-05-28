import React, { useContext, useEffect } from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import { UserProvider } from './context/UserContext';
import { TickerSection } from './components/TickerSection';
import { GraphSection } from './components/GraphSection';
import { GraphContext, GraphProvider } from './context/GraphContext';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Support } from './pages/Support';
import { api } from './services/api';

function App() {

  const setSession = async () => {
    const session = sessionStorage.getItem("currentSession")
  
    if(!session) {
      const response = await api.post("/api/visits/",{})      
      sessionStorage.setItem("currentSession", "true")
    }

  }
  setSession()
  return (
    <UserProvider>
      <GraphProvider>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='support' element={<Support/>}/>
        </Routes>
      </GraphProvider>
    </UserProvider>


    
  );
}

export default App;
