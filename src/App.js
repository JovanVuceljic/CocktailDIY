import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Author from './pages/Author.js';
import Drink from './pages/Drink.js';
import Cocktails from './pages/Cocktails.js';
import { CocktailContext } from './CocktailContext.js';


const Content = styled.div`
  min-height: 100vh;
	max-width: 1280px;
	margin: 0 auto;
  padding: 0 20px 70px 20px;
`;


const App = () => {

  const [visitedCocktails, setVisitedCocktails] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/author" component={Author} />
            <CocktailContext.Provider value={{visitedCocktails,setVisitedCocktails}}>
              <Route path="/cocktails" component={Cocktails} />
              <Route path="/drink/:id" component={Drink} />
            </CocktailContext.Provider>
          </Switch>
        </Content>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
