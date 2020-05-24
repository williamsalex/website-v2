import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
      <div className="none">
          <div className = 'flexy'>
            <div className = 'content'>
                <h1 className = "title">alexander williams</h1>
                <p className = 'title'>software engineer</p>
                <p className = 'subtitle'>brooklyn, ny</p>
            </div>
            <div className = 'movers'>
                <Link to = '/' className = 'currMover' style = {{textDecoration: 'none'}} > /</Link>
                <Link to = '/work' className = 'mover' style = {{textDecoration: 'none'}} > work /</Link>
                <Link to = '/about' className = 'mover' style = {{textDecoration: 'none'}} > about /</Link>
                <Link to = '/contact' className = 'mover' style = {{textDecoration: 'none'}} > contact /</Link>
                <a href = '/resume.pdf' rel="noopener" target="_blank" className = 'mover' style = {{textDecoration: 'none'}} > resume /</a>
            </div>
          </div>
      </div>
    )
  }