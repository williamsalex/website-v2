import React from 'react'

export default function Work() {
    return (
        <div className = 'content'>
            <h1 className = "title">work</h1>
            <p className = 'bigListItem'>cruze</p>
            <p className = 'listItem'>bicycle routing app - first place at hack nyu 2020</p>
            <a href='https://devpost.com/software/cruze' rel="noopener noreferrer" target="_blank">
                <img alt = 'devpost' className = 'icon' src = '/devpost.png'></img>
            </a>
            <a href = 'https://github.com/williamsalex/cruze' rel="noopener noreferrer" target="_blank">
                <img alt = 'github' className = 'icon' src = '/github.png'></img>
            </a>
            <br/>
            <p className = 'bigListItem'>direxit</p>
            <p className = 'listItem'>fire safety sensor - first place at dragonhacks 2020</p>
            <a href = 'https://devpost.com/software/direxit' rel="noopener noreferrer" target="_blank">
                <img alt = 'devpost' className = 'icon' src = '/devpost.png'></img>
            </a>
            <a href = 'https://github.com/MisterEddie/DirExit' rel="noopener noreferrer" target="_blank">
                <img alt = 'github' className = 'icon' src = '/github.png'></img>
            </a>
            <br/>
            <p className = 'bigListItem'>bobadilla conjecture</p>
            <p className = 'listItem'>pythonic analysis of complex analytic singularities & their beta invariants, lê cycles & milnor numbers</p>
            <a href = 'https://github.com/williamsalex/Bobadilla-Conjecture' rel="noopener noreferrer" target="_blank">
                <img alt = 'github' className = 'icon' src = '/github.png'></img>
            </a>
        </div>
    )
  }