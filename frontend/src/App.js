import React from 'react';
import FormComp from './FormComp';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
       
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/register" >
          <FormComp />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  )
};

export default App;


