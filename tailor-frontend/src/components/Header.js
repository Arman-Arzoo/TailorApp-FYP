import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <div className="header">
             
             <div className="header-logo">
             <Link to="/">Tailor App</Link>
             </div>
             <div className="header-menu">
             <Link to="/signup">Sign Up</Link>
             <Link to="/singIn">Sign In</Link>
             </div>
            
            

            </div>
        </div>
    )
}
