import React from 'react'
import { Link } from 'react-router-dom'

export default function Work() {
    return (
      <div className="none">
          <div className = 'flexy'>
            <div className = 'content'>
                <h1 className = "title">work</h1>
                <p className = 'bigListItem'>cruze</p>
                <p className = 'listItem'>bicycle routing app - first place at hack nyu 2020</p>
                <a href='https://devpost.com/software/cruze' target="_blank">
                    <img className = 'icon' src = '/devpost.png'></img>
                </a>
                <a href = 'https://github.com/williamsalex/cruze' target="_blank">
                    <img className = 'icon' src = '/github.png'></img>
                </a>
                <br/>
                <p className = 'bigListItem'>direxit</p>
                <p className = 'listItem'>fire safety sensor - first place at dragonhacks 2020</p>
                <a href = 'https://devpost.com/software/direxit' target="_blank">
                    <img className = 'icon' src = '/devpost.png'></img>
                </a>
                <a href = 'https://github.com/MisterEddie/DirExit' target="_blank">
                    <img className = 'icon' src = '/github.png'></img>
                </a>
                <br/>
                <p className = 'bigListItem'>bobadilla conjecture</p>
                <p className = 'listItem'>analysis of complex analytic singularities & their beta invariants, lê cycles & milnor numbers</p>
                <a href = 'https://github.com/williamsalex/Bobadilla-Conjecture' target="_blank">
                    <img className = 'icon' src = '/github.png'></img>
                </a>
            </div>
            <div className = 'movers'>
                <Link to = '/' className = 'mover' style = {{textDecoration: 'none'}} > /</Link>
                <Link to = '/work' className = 'currMover' style = {{textDecoration: 'none'}} > work /</Link>
                <a href = '/resume.pdf' target="_blank" className = 'mover' style = {{textDecoration: 'none'}} > resume /</a>
                <Link to = '/about' className = 'mover' style = {{textDecoration: 'none'}} > about /</Link>
                <Link to = '/contact' className = 'mover' style = {{textDecoration: 'none'}} > contact /</Link>
            </div>
          </div>
      </div>
    )
  }