import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router'
import { useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import Home from './Home'
import Work from './Work'
import MiniNav from './MiniNav'
import Demos from './Demos'
import Contact from './Contact'
import About from './About'
import Navigation from './Navigation'
import './App.css';

function useWindowSize() {
  const isWindowClient = typeof window === 'object'

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  )

  useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth)
    }
    if(isWindowClient) {
      window.addEventListener('resize', setSize)

      return () => window.removeEventListener('resize', setSize)
    }
  }, [isWindowClient, setWindowSize])

  return windowSize
}


export default function App() {

  const location = useLocation()
  const windowSize = useWindowSize()
  console.log(windowSize)

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0.3, transform: 'translate3d(0,-100vh,0)'},
    enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
    leave: {opacity: 0.3, transform: 'translate3d(0,125vh,0)'},
    config: {tension: 125, friction: 30}
  })



  return (
    <div>
      {
        transitions.map(({item:location, props, key}) => 
          <animated.div style = {props} key = {key}>
              <Switch location={location}>
                <Route exact path='/' component={Home}/>
                <Route path='/demos' component={Demos}/>
                <Route path='/work' component={Work}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
              </Switch>
          </animated.div>
        )
      }
      {
        windowSize > 800 &&
        <Navigation/>
      }
      {
        windowSize < 800 &&
        <MiniNav/>
      }
    </div>
  )
}