import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {GlobalContext} from './../context/GlobalContexts';

export const Header = () => {

  const {userData} = useContext(GlobalContext);

  const firstname =((userData || {}).user || {}).firstName;
  const lastname =((userData || {}).user || {}).lastName;
  const userName = firstname +" "+lastname;

  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <Link to="/">Tailor App</Link>
        </div>
        <div className="header-menu">

          {userData.user ? (<> 

            <Link to="/udashboard" >{ userName}</Link>
          </>):(<> 
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>)}
          
        </div>
      </div>
    </div>
  );
};
