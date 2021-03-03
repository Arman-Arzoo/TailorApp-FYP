import React, { useContext } from "react";
import { Link,Route,  useHistory } from "react-router-dom";
import { addTailor } from "../AdminDashboard/AddTailor";
import { GlobalContext } from "./../../context/GlobalContexts";
// import { UpdateProfile } from "./UpdateProfile";
import { RiLogoutCircleFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { AdminDashboard } from "./AdminDashboard";
// import { MyMeasurement } from "./MyMeasurement";
// import { UserDashboard } from "./UserDashboard";
// import { HireTailor } from "./HireTailor";

export const ADashboard = () => {
  const { userData, setUserData } = useContext(GlobalContext);

  const { isSidebar } = useContext(GlobalContext)
  const history = useHistory();

  const firstname = ((userData || {}).user|| {}).firstName;
  const lastname = ((userData || {}).user || {}).lastName;
  const adminName = firstname + " " + lastname;


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
           <span className="sidebar-name">{adminName} </span>
        </div>
        <hr/>
       
        <Link to="/adashboard">
         
          <span>
            <MdDashboard/>
          </span>
          Dashboard
         </Link>
         <Link className="active" to="/adashboard/addtailor">
          add tailor
        </Link> 
        {/* <Link to="/udashboard/my-measurement">My meansurement</Link>
        <Link to="/udashboard/update-profile">Update Profile</Link> */}
        {/* <Link to="/udashboard/hire-tailor">Hire Tailor</Link> */}
        {/* <Link to="/udashboard/pick-up-service">Pick up Services</Link> */}
      

        {userData.user? (
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
        <Route exact path="/adashboard/addtailor" component={addTailor}></Route>
        {/* <Route path="/udashboard/my-measurement" component={MyMeasurement}></Route>
        <Route
          path="/udashboard/update-profile"
          component={UpdateProfile}
        ></Route> */}
        {/* <Route path="/udashboard/hire-tailor" component={HireTailor}></Route> */}
        {/* <Route path="/udashboard/pick-up-service" component={MyOrder}></Route> */}
        <Route exact path="/adashboard" component={AdminDashboard}></Route>
      </div>
    </div>
  );
};
