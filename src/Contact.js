import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
      <div className="none">
          <div className = 'flexy'>
            <div className = 'content'>
                <h1 className = "title">contact</h1>
                <p className = 'listItem'>i am always interested in connecting and working together, shoot me a message!</p>
                <br/>
                <a href = 'mailto:williamsalex@pm.me'>
                    <img alt='email 'className = 'icon' src = '/email.png'></img>
                </a>
                <a href = 'https://github.com/williamsalex' rel="noopener noreferrer" target="_blank">
                    <img alt = 'github' className = 'icon' src = '/github.png'></img>
                </a>
                <a href = 'https://www.linkedin.com/in/alexander-williams-823925182/' rel="noopener noreferrer" target="_blank">
                    <img alt = 'linkedin' className = 'icon' src = '/linkedin.png'></img>
                </a>
                <a href = 'https://devpost.com/williamsalex' rel="noopener noreferrer" target="_blank">
                    <img alt = 'devpost' className = 'icon' src = '/devpost.png'></img>
                </a>
            </div>
            <div className = 'movers'>
                <Link to = '/' className = 'mover' style = {{textDecoration: 'none'}} > /</Link>
                <Link to = '/work' className = 'mover' style = {{textDecoration: 'none'}} > work /</Link>
                <Link to = '/about' className = 'mover' style = {{textDecoration: 'none'}} > about /</Link>
                <Link to = '/contact' className = 'currMover' style = {{textDecoration: 'none'}} > contact /</Link>
                <a href = '/resume.pdf' rel="noopener" target="_blank" className = 'mover' style = {{textDecoration: 'none'}} > resume /</a>
            </div>
          </div>
      </div>
    )
  }