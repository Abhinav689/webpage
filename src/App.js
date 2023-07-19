import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import salaar from './salaar';
import gunturkaram from './gunturkaram';
import jawan from './jawan'
import oppenheimer from './oppenheimer'
import nun from './nun'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/salaar' component={salaar} />
          <Route path='/nun' component={nun} />
          <Route path='/gunturkaram' component={gunturkaram} />
          <Route path='/jawan' component={jawan} />
          <Route path='/oppenheimer' component={oppenheimer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
