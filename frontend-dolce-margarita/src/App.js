import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginAdmin from "./componentes/loginAdmin/LoginAdmin";
import Home from "./componentes/home/Home";


function App() {
  return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
            <Route path="/adminlogin" exact component={LoginAdmin} />
        </div>
      </Router>
  );
}

export default App;
