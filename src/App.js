import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import Drink from './pages/Drink.js';
import GlassFilter from './pages/GlassFilter.js';
import IngridientFilter from './pages/IngridientFilter.js';


const Content = styled.div`
  min-height: 100vh;
	max-width: 1280px;
	margin: 20px auto 50px auto;
`;

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/glass-filter">
              <GlassFilter />
            </Route>
            <Route path="/ingridient-filter">
              <IngridientFilter />
            </Route>
            <Route path="/drink/:id" component={Drink} />
          </Switch>
        </Content>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
