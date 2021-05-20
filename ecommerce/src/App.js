import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Category from './components/Categories/Category';

const App = () => {

  

  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products}/>
        <Route path="/category/products/:id" exact component={Category}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
