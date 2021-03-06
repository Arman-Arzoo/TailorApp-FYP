import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import axios from 'axios';
import ErrorNotice from './../misc/errorNotices';

export const AddTailor = () => {
  // const { userRegistraion } = useContext(GlobalContext);

  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setconfirmedPassword] = useState();

  const [error, setError] = useState();


  const history = useHistory();


  async function tailor_Registraion(e) {
    e.preventDefault();

    try {
      const newTailor ={
        firstName,
        lastName,
        email,
        password,
        confirmedPassword
        
      
      }

      const a = await axios.post("/tailors/signup", newTailor);
      console.log(a);
  
      history.push("/adashboard/addtailor")
   
     
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
    
    
  }

  return (
    <div className="my__measurement">
        <div  className="form-measurement">
      
      <form onSubmit={tailor_Registraion}>
      <h2 className="text-center">Add New Tailor</h2>
      
        
        
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

        <input type="submit" value="Add Tailor" />
        {/* <Link to="/tailors/signin">Already have an account</Link> */}
      </form>
      </div>

      <div className="demo">
          <table>
            <thead>
              <tr>
                <th>Tailor Name</th>
                <th>Created At</th>
                <th>Amount</th>
                <th>Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Payment">Payment #1</td>
                <td data-label="Issue Date">02/01/2015</td>
                <td data-label="Amount">$2,311</td>
                <td data-label="Period">01/01/2015 - 01/31/2015</td>
              </tr>
              <tr>
                <td data-label="Payment">Payment #2</td>
                <td data-label="Issue Date">03/01/2015</td>
                <td data-label="Amount">$3,211</td>
                <td data-label="Period">02/01/2015 - 02/28/2015</td>
              </tr>
            </tbody>
          </table>
        </div>



    </div>
  );
};
