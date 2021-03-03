import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from "./../context/GlobalContexts";

export const Footer = ({name}) => {
    const { userData } = useContext(GlobalContext);
    return (
        <div className="footer">
             <p>CopyRight @ 2021. All right reserved. Tailor App</p>
             {userData.user ? (
                 <>
                 </>
             ):(<>
                <Link to="/tailors/signin">Tailor SignIn</Link>
             </>
                )}
            
        </div>
    )
}
