import React from 'react';
import styled from 'styled-components';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Drinks from './components/Drinks.js';


const Content = styled.div`
  min-height: 100vh;
	max-width: 1280px;
	margin: 0 auto;
`;

const App = () => {

  return (
    <div className="App">
      <Header />
      <Content>
        <Drinks />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
