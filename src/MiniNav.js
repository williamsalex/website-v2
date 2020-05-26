import React from 'react'
import { Link } from 'react-router-dom'
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
    return(
        <div>
            <p className = 'mini'>apologies - mobile is under construction and currently unsupported.</p>
        </div>
    )
}