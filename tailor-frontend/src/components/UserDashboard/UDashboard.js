import React from "react";
import { Link, Route } from "react-router-dom";
import {MyOrder} from '../UserDashboard/MyOrder';

export const UDashboard = () => {
  return (
    <div>
      <div className="sidebar">
        <Link className="active" to='/dashboard'>
          Dashboard
        </Link>
        <Link to='/udashboard/myorder'>MyOrder</Link>
        <Link to='/udashboard/my-measurement'>My meansurement</Link>
        <Link to='/udashboard/update-profile'>Update Profile</Link>
        <Link to='/udashboard/hire-tailor'>Hire Tailor</Link>
        <Link to='/udashboard/pick-up-service'>Pick up Services</Link>
        <Link to='/udashboard/dashboard'>Dashboard</Link>
       
      </div>

      <div className="content">
          <Route exact path='/udashboard/myorder'  component={MyOrder}></Route>
          <Route path='/udashboard/my-measurement' component={MyOrder}></Route>
          <Route path='/udashboard/update-profile' component={MyOrder}></Route>
          <Route path='/udashboard/hire-tailor' component={MyOrder}></Route>
          <Route path='/udashboard/pick-up-service' component={MyOrder}></Route>
          <Route path='/udashboard/dashboard' component={MyOrder}></Route>
      </div>
    </div>
  );
};
