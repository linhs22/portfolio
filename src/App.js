// App.jsx

import React from 'react';
// import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a id="titlehead" class="navbar-brand" href="#">Henry Lin</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link">Projects</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>

        </div>
      </nav>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;