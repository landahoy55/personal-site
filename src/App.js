import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home/Home';
import Projects from './components/projects/Projects';


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Home} /> 
        <Route path='/projects' component={Projects} />
      </BrowserRouter>
    );
  }
}

export default App;
