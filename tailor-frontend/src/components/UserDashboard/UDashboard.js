import React, { useContext } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { MyOrder } from "../UserDashboard/MyOrder";
import { GlobalContext } from "./../../context/GlobalContexts";
import { UpdateProfile } from "./UpdateProfile";
import { RiLogoutCircleFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";

export const UDashboard = () => {
  const { userData, setUserData } = useContext(GlobalContext);
  const history = useHistory();

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-profile">
           <img src="/images/OurTeam/arman.PNG" alt="arman"></img>
           <span className="sidebar-name">arman ali </span>
        </div>
        <hr/>
       
        <Link to="/udashboard/dashboard">
         
          <span>
            <MdDashboard/>
          </span>
          Dashboard
        </Link>
        <Link className="active" to="/udashboard/myorder">
          MyOrder
        </Link>
        <Link to="/udashboard/my-measurement">My meansurement</Link>
        <Link to="/udashboard/update-profile">Update Profile</Link>
        <Link to="/udashboard/hire-tailor">Hire Tailor</Link>
        <Link to="/udashboard/pick-up-service">Pick up Services</Link>
      

        {userData.user ? (
          <>
            <Link onClick={logOut}>
              <span>
                <RiLogoutCircleFill/>
              </span>
              <span>Log Out</span>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="content">
        <Route exact path="/udashboard/myorder" component={MyOrder}></Route>
        <Route path="/udashboard/my-measurement" component={MyOrder}></Route>
        <Route
          path="/udashboard/update-profile"
          component={UpdateProfile}
        ></Route>
        <Route path="/udashboard/hire-tailor" component={MyOrder}></Route>
        <Route path="/udashboard/pick-up-service" component={MyOrder}></Route>
        <Route path="/udashboard/dashboard" component={MyOrder}></Route>
      </div>
    </div>
  );
};
