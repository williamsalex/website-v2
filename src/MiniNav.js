import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function Nav() {
    const loc = useLocation().pathname
    console.log('mininav!')
  return (
    <div className = 'movers'>
        <Link to = '/' className = {`${loc === '/' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} > /</Link>
        <Link to = '/demos' className = {`${loc === '/demos' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ demos</Link>
        <Link to = '/work' className = {`${loc === '/work' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ work</Link>
        <Link to = '/about' className = {`${loc === '/about' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ about</Link>
        <Link to = '/contact' className = {`${loc === '/contact' ? 'curr' : ''}mover`} style = {{textDecoration: 'none'}} >/ contact</Link>
        <a href = '/resume.pdf' rel="noopener" target="_blank" className = 'mover' style = {{textDecoration: 'none'}} >/ resume</a>
    </div>
  )
}

export default function MiniNav() {

    // const loc = useLocation().pathname
    let locs = ['/','/demos','/work','/about','/contact']
    const [loc, setLoc] = useState(0)

    return(
        <div>
            <Redirect to={locs[loc]}/>
            <span className = 'chevron' onClick = {() => setLoc(loc > 0 ? loc - 1 : locs.length - 1)}></span>
            <span className = 'chevron down' onClick = {() => setLoc(loc < locs.length - 1 ? loc + 1 : 0)}></span>
        </div>
    )
}