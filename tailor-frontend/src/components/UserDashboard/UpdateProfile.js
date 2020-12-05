import React, { useContext} from "react";
// import { Link, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { GlobalContext } from "./../../context/GlobalContexts";
// import axios from 'axios';
// import ErrorNotice from './../misc/errorNotices';

export const UpdateProfile = () => {
  const { userData} = useContext(GlobalContext);


 

  return (
    <div className="form-container">
      
      <form >
      <h2 className="text-center">Your profile</h2>
      {/* {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />} */}
        
        
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Your name.."
          value={((userData || {}).user || {}).firstName}
        
       
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Your last name.."
          value={((userData || {}).user || {}).lastName}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="Email"
          placeholder="Email.."
          value={((userData || {}).user || {}).email}
        />

        
        <label htmlFor="phone number">Phone Number</label>
        <input
          type="text"
          name="phone number"
          placeholder="Phone number.."
          value={((userData || {}).user || {}).phoneNumber}
         
        />

        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
       
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="address">address</label>
        <input
          type="text"
          name="address"
          placeholder="Address.."
          value={((userData || {}).user || {}).address}
        
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
        
        >
          <option value="pakistan">Pakistan</option>
        </select>

        <label htmlFor="state">State</label>
        <select
          name="state"
          
        >
          <option value="pubjab">Pubjab</option>
        </select>

        <label htmlFor="city">City</label>
        <select
          name="city"
        
        >
          <option value="attock">Attock</option>
        </select>

        <label htmlFor="zip code">Zip code</label>
        <input
          type="text"
          name="zip code"
          placeholder="Your last name.."
         
        />

        <input type="submit" value="Update Profile" />
      
      </form>
    </div>
  );
};
