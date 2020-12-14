import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import ErrorNotice from './../misc/errorNotices';

export const SignUp = () => {
  // const { userRegistraion } = useContext(GlobalContext);

  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setconfirmedPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState();
  const [country, setCountry] = useState("pakistan")
  const [state, setState] = useState("pubjab");
  const [city, setCity] = useState("attock");
  const [zipcode, setZipCode] = useState();
  const [error, setError] = useState();


  const history = useHistory();


  async function user_Registraion(e) {
    e.preventDefault();

    try {
      const newUser ={
        firstName,
        lastName,
        email,
        password,
        confirmedPassword,
        phoneNumber,
        gender,
        address,
        country,
        state,
        city,
        zipcode,
      
      }

      const a = await axios.post("/users/signup", newUser);
      console.log(a);
  
      history.push("/signin")
   
     
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
    
    
  }

  return (
    <div className="form-container">
      
      <form onSubmit={user_Registraion}>
      <h2 className="text-center">Create An Account</h2>
      {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />}
        
        
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Your name.."
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Your last name.."
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        />

        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="Email"
          placeholder="Email.."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password.."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <label htmlFor="lname">Confirm password</label>
        <input
          type="password"
          name="confirm password"
          placeholder="Confirmed Password."
          onChange={(e) => {
            setconfirmedPassword(e.target.value);
          }}
        />

        <label htmlFor="phone number">Phone Number</label>
        <input
          type="text"
          name="phone number"
          placeholder="Phone number.."
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
          <option selected value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="address">address</label>
        <input
          type="text"
          name="address"
          placeholder="Address.."
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
          <option selected value="pakistan">Pakistan</option>
        </select>

        <label htmlFor="state">State</label>
        <select
          name="state"
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option selected value="pubjab">Pubjab</option>
        </select>

        <label htmlFor="city">City</label>
        <select
          name="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option selected value="attock">Attock</option>
        </select>

        <label htmlFor="phone number">Phone Number</label>
        <input
          type="text"
          name="phone number"
          placeholder="Phone number.."
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        />

        <input type="submit" value="Create An Account" />
        <Link to="/signin">Already have an account</Link>
      </form>
    </div>
  );
};
