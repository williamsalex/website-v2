import React from 'react'
import { Link } from 'react-router-dom'

export default function Demos() {
    return (
      <div className="none">
          <div className = 'flexy'>
            <div className = 'content'>
                <h1 className = "title">demos</h1>
                <p className = 'title'>under construction</p>
                <p className = 'subtitle'>check back later</p>
            </div>
            <div className = 'movers'>
                <Link to = '/' className = 'mover' style = {{textDecoration: 'none'}} > /</Link>
                <Link to = '/demos' className = 'currMover' style = {{textDecoration: 'none'}} > demos /</Link>
                <Link to = '/work' className = 'mover' style = {{textDecoration: 'none'}} > work /</Link>
                <Link to = '/about' className = 'mover' style = {{textDecoration: 'none'}} > about /</Link>
                <Link to = '/contact' className = 'mover' style = {{textDecoration: 'none'}} > contact /</Link>
                <a href = '/resume.pdf' rel="noopener" target="_blank" className = 'mover' style = {{textDecoration: 'none'}} > resume /</a>
            </div>
          </div>
      </div>
    )
  }