import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import LoginAdmin from "./componentes/loginAdmin/LoginAdmin";
import Home from "./componentes/home/Home";


function App() {
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route
                      path="/home"
                      component={Home} />
                  <Route
                      exact
                      path="/adminlogin"
                      component={LoginAdmin} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
