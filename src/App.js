import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Author from './pages/Author.js';
import Drink from './pages/Drink.js';
import FilterCocktails from './pages/FilterCocktails.js';
import SearchCocktails from './pages/SearchCocktails.js';


const Content = styled.div`
  min-height: 100vh;
	max-width: 1280px;
	margin: 0 auto;
  padding: 20px 30px 20px 50px;
`;

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/filter-cocktails" component={FilterCocktails} />
            <Route path="/search-cocktails" component={SearchCocktails} />
            <Route path="/about" component={About} />
            <Route path="/author" component={Author} />
            <Route path="/drink/:id" component={Drink} />
          </Switch>
        </Content>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
