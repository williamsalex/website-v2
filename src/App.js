import React from 'react';
import { Route, Switch } from 'react-router'
import Home from './Home'
import Work from './Work'
import Demos from './Demos'
import Contact from './Contact'
import About from './About'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/demos' component={Demos}/>
        <Route path='/work' component={Work}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}