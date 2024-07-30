import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App: React.FC = () => (
  <AppContainer>
    <Header />
    <About />
    <Contact />
  </AppContainer>
);

export default App;
