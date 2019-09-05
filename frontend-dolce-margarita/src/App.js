import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginAdmin from "./componentes/loginAdmin/LoginAdmin";


function App() {
  return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={LoginAdmin} />
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Dolce Margarita</h2>;
}

export default App;
