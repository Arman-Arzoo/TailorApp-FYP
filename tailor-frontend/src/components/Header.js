import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../context/GlobalContexts";
import {AiFillBell} from 'react-icons/ai'

export const Header = () => {
  const { userData } = useContext(GlobalContext);
  const {isSidebar, setSidebar } = useContext(GlobalContext)

  const firstname = ((userData || {}).user || {}).firstName;
  const lastname = ((userData || {}).user || {}).lastName;
  const userName = firstname + " " + lastname;

  return (
    <div>
      <div className="header">
        <div className="header-logo">
          {/* <button onClick={()=>{setSidebar(!isSidebar)}}>Menu</button> */}
          <Link to="/">Tailor App</Link>
         
        </div>
       
        <div className="header-menu">
          {userData.user ? (
            <>
            <dev className="users-notification">
                <AiFillBell/>
              </dev>

              <Link to="/udashboard"> 
                <div className="header-profile">
                  <img src="/images/OurTeam/arman.PNG" alt="arman"></img>
                  <span className="header-name">{userName} </span>
                </div>
              </Link>
              
            </>
          ) : (
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
