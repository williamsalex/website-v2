import React, { useState } from 'react';
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import Home from './Home'
import Work from './Work'
import Demos from './Demos'
import Contact from './Contact'
import About from './About'
import './App.css';

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="flexy">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/demos' component={Demos}/>
          <Route path='/work' component={Work}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      <div className = 'movers'>
          <Link to = '/' className = {`${page === 'home' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} onClick ={() => setPage('home')}> /</Link>
          <Link to = '/demos' className = {`${page === 'demos' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} onClick ={() => setPage('demos')}>/ demos</Link>
          <Link to = '/work' className = {`${page === 'work' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} onClick ={() => setPage('work')} >/ work</Link>
          <Link to = '/about' className = {`${page === 'about' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} onClick ={() => setPage('about')}>/ about</Link>
          <Link to = '/contact' className = {`${page === 'contact' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} onClick ={() => setPage('contact')}>/ contact</Link>
          <a href = '/resume.pdf' rel="noopener" target="_blank" className = 'mover' style = {{textDecoration: 'none'}} >/ resume</a>
      </div>
    </div>
  );
}