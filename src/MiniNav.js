import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function MiniNav() {
    
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