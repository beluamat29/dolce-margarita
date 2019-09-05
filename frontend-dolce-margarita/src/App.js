import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Dolce Margarita</h2>;
}

export default App;
