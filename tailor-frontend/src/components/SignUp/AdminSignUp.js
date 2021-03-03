import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import ErrorNotice from './../misc/errorNotices';

export const AdminSignUp = () => {
  // const { userRegistraion } = useContext(GlobalContext);

  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setconfirmedPassword] = useState();

  const [error, setError] = useState();


  const history = useHistory();


  async function admin_Registraion(e) {
    e.preventDefault();

    try {
      const admin ={
        firstName,
        lastName,
        email,
        password,
        confirmedPassword
        
      
      }

      const a = await axios.post("/admin/signup", admin);
      console.log(a);
  
      history.push("/admin/signin")
   
     
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
    
    
  }

  return (
    <div className="form-container">
      
      <form onSubmit={admin_Registraion}>
      <h2 className="text-center">Create An Account</h2>
      
        
        
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Your name.."
          onChange={(e) => {
            setfirstName(e.target.value);
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

         {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />}  

        <input type="submit" value="Create An Account" />
        <Link to="/admin/signin">Already have an account</Link>
      </form>
    </div>
  );
};
