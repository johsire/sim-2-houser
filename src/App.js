import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './component/Header/Header';
import Wizard from './component/Wizard/Wizard';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <Header />
          <Link to="/" className='links'>Dashboard</Link>
          <Link to="/Wizard" className='links'>Wizard</Link> 
        </nav>
        {routes}
        {Wizard}
      </div>
    )}
};

export default App;
