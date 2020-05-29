import React from 'react'

export default function Contact() {
    return (
        <div className = 'content'>
            <h1 className = "title">contact</h1>
            <p className = 'listItem'>i am always interested in connecting and working together, shoot me a message!</p>
            <br/>
            <a href = 'mailto:williamsalex@pm.me'>
                <img alt='email 'className = 'icon' src = '/email.png'></img>
            </a>
            <a href = 'https://binarysearch.io/@/alexwilliams' rel="noopener noreferrer" target="_blank" style = {{textDecoration: 'none'}}>
                <p className = 'bin'>B</p>
            </a>
            <a href = 'https://www.linkedin.com/in/alexander-williams-823925182/' rel="noopener noreferrer" target="_blank">
                <img alt = 'linkedin' className = 'icon' src = '/linkedin.png'></img>
            </a>
            <a href = 'https://github.com/williamsalex' rel="noopener noreferrer" target="_blank">
                <img alt = 'github' className = 'icon' src = '/github.png'></img>
            </a>
            <a href = 'https://devpost.com/williamsalex' rel="noopener noreferrer" target="_blank">
                <img alt = 'devpost' className = 'icon' src = '/devpost.png'></img>
            </a>
        </div>
    )
  }