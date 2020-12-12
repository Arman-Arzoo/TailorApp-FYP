import Axios from "axios";
import React, { useContext, useState} from "react";
import { useHistory } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { GlobalContext } from "./../../context/GlobalContexts";
// import axios from 'axios';
// import ErrorNotice from './../misc/errorNotices';

export const UpdateProfile = () => {
  const { userData} = useContext(GlobalContext);
  
  const [firstName, setFirstName] = useState(((userData || {}).user || {}).firstName);
  const [lastName, setlastName] = useState(((userData || {}).user || {}).lastName);
  const [email, setEmail] = useState(((userData || {}).user || {}).email);
  const [phoneNumber, setPhoneNumber] = useState(((userData || {}).user || {}).phoneNumber);
  const [gender, setGender] = useState(((userData || {}).user || {}).gender);
  const [address, setAddress] = useState(((userData || {}).user || {}).address);
  const [country, setCountry] = useState(((userData || {}).user || {}).country)
  const [state, setState] = useState(((userData || {}).user || {}).state);
  const [city, setCity] = useState(((userData || {}).user || {}).city);
  const [zipcode, setZipCode] = useState(((userData || {}).user || {}).zipcode);
  // const [error, setError] = useState();


  const history = useHistory();

  async function updateUser(e){
    e.preventDefault();
    
    try {
      const updateUser ={
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
        address,
        country,
        state,
        city,
        zipcode,
      }

      const a = await Axios.post("/users/5fc28fd31610f4afd041bad8", updateUser);
      console("user updated",a)
      
    } catch (err) {
      
    }

  }


 

  return (
    <div className="form-container">
      
      <form onSubmit = {updateUser}>
      <h2 className="text-center">Your profile</h2>
      {/* {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />} */}
        
        
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Your name.."
          value={((userData || {}).user || {}).firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        
       
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Your last name.."
          value={((userData || {}).user || {}).lastName}
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="Email"
          placeholder="Email.."
          value={((userData || {}).user || {}).email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        
        <label htmlFor="phone number">Phone Number</label>
        <input
          type="text"
          name="phone number"
          placeholder="Phone number.."
          value={((userData || {}).user || {}).phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
         
        />

        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
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
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option value="pakistan">Pakistan</option>
        </select>

        <label htmlFor="state">State</label>
        <select
          name="state"
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option value="pubjab">Pubjab</option>
        </select>

        <label htmlFor="city">City</label>
        <select
          name="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="attock">Attock</option>
        </select>

        <label htmlFor="zip code">Zip code</label>
        <input
          type="text"
          name="zip code"
          placeholder="Your last name.."
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
         
        />

        <input type="submit" value="Update Profile" />
      
      </form>
    </div>
  );
};
