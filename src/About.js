import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
      <div className="none">
          <div className = 'flexy'>
            <div className = 'content'>
                <h1 className = "title">about</h1>
                <p className = 'bigListItem'>work history</p>
                <p className = 'listItem'>researcher in northeastern university's math department for one year</p>
                <br/>
                <p className = 'bigListItem'>education</p>
                <p className = 'listItem'>flatiron school software engineering immersive graduate,</p>
                <p className = 'listItem'>associate's degree from bard college in liberal arts,</p>
                <p className = 'listItem'>one year of computer engineering studies at northeastern university</p>
                <br/>
                <p className = 'bigListItem'>volunteering</p>
                <p className = 'listItem'>data analyst for the boston brigade of code for america for four months</p>
                <br/>
                <p className = 'bigListItem'>other</p>
                <p className = 'listItem'>long distance runner, 1x marathon, 2x half marathon</p>
                <p className = 'listItem'>avid reader & musicophile</p>
                <p className = 'listItem'>horrible chess player</p>
            </div>
            <div className = 'movers'>
                <Link to = '/' className = 'mover' style = {{textDecoration: 'none'}} > /</Link>
                <Link to = '/work' className = 'mover' style = {{textDecoration: 'none'}} > work /</Link>
                <Link to = '/about' className = 'currMover' style = {{textDecoration: 'none'}} > about /</Link>
                <Link to = '/contact' className = 'mover' style = {{textDecoration: 'none'}} > contact /</Link>
                <a href = '/resume.pdf' rel="noopener" target="_blank" className = 'mover' style = {{textDecoration: 'none'}} > resume /</a>
            </div>
          </div>
      </div>
    )
  }