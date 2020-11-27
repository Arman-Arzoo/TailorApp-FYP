import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { GlobalContext } from "./../../context/GlobalContexts";
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
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState()
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipCode] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(GlobalContext);
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

      await axios.post("/users/signup", newUser);

      const loginRes = await axios.post("/users/signin", {
        email,
        password
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/")
   
  
      
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
          <option value="male">Male</option>
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

        <input type="submit" value="Create An Account" />
        <Link to="/signin">Already have an account</Link>
      </form>
    </div>
  );
};
