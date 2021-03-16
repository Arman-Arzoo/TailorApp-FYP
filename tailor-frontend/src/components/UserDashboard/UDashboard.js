import React, { useContext } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { MyOrder } from "../UserDashboard/MyOrder";
import { GlobalContext } from "./../../context/GlobalContexts";
import { UpdateProfile } from "./UpdateProfile";
import { RiLogoutCircleFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { MyMeasurement } from "./MyMeasurement";
import { UserDashboard } from "./UserDashboard";
import { HireTailor } from "./HireTailor";

export const UDashboard = () => {
  const { userData, setUserData } = useContext(GlobalContext);
  const { isSidebar } = useContext(GlobalContext)
  const history = useHistory();

  const firstname = ((userData || {}).user || {}).firstName;
  const lastname = ((userData || {}).user || {}).lastName;
  const userName = firstname + " " + lastname;

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
      <div className={isSidebar ? "sidebar":"hide-sidebar"}>
        <div className="sidebar-profile">
           <img src="/images/OurTeam/arman.PNG" alt="arman"></img>
           <span className="sidebar-name">{userName} </span>
        </div>
        <hr/>
       
        <Link to="/users/udashboard">
         
          <span>
            <MdDashboard/>
          </span>
          Dashboard
        </Link>
        <Link className="active" to="/users/udashboard/myorder">
          MyOrder
        </Link>
        <Link to="/users/udashboard/my-measurement">My meansurement</Link>
        <Link to="/users/udashboard/update-profile">Update Profile</Link>
        <Link to="/users/udashboard/hire-tailor">Hire Tailor</Link>
        <Link to="/users/udashboard/pick-up-service">Pick up Services</Link>
      

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
        <Route exact path="/users/udashboard/myorder" component={MyOrder}></Route>
        <Route path="/users/udashboard/my-measurement" component={MyMeasurement}></Route>
        <Route
          path="/users/udashboard/update-profile"
          component={UpdateProfile}
        ></Route>
        <Route path="/users/udashboard/hire-tailor" component={HireTailor}></Route>
        <Route path="/users/udashboard/pick-up-service" component={MyOrder}></Route>
        <Route exact path="/users/udashboard" component={UserDashboard}></Route>
      </div>
    </div>
  );
};
