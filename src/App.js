import React from 'react';
import { Route, Switch } from 'react-router'
import { Link, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import Home from './Home'
import Work from './Work'
import Demos from './Demos'
import Contact from './Contact'
import About from './About'
import './App.css';

export default function App() {
  
  const location = useLocation()

  let loc = location.pathname

  const transitions = useTransition(location, location => location.pathname, {
    from: {transform: 'translate3d(0,-1000px,0)'},
    enter: {transform: 'translate3d(0,0px,0)'},
    leave: {transform: 'translate3d(0,1000px,0)'}
  })

  return (
    <div className="flexy">
      {
        transitions.map(({item: location, props, key}) => 
          <animated.div style = {props} key = {key}>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/demos' component={Demos}/>
                <Route path='/work' component={Work}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
              </Switch>
          </animated.div>
        )
      }
      <div className = 'movers'>
          <Link to = '/' className = {`${loc === '/' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} > /</Link>
          <Link to = '/demos' className = {`${loc === '/demos' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ demos</Link>
          <Link to = '/work' className = {`${loc === '/work' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ work</Link>
          <Link to = '/about' className = {`${loc === '/about' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ about</Link>
          <Link to = '/contact' className = {`${loc === '/contact' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ contact</Link>
          <a href = '/resume.pdf' rel="noopener" target="_blank" className = 'mover' style = {{textDecoration: 'none'}} >/ resume</a>
      </div>
    </div>
  )
}