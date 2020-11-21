import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="form-container">
      <form>
        <h2 className="text-center">Create An Account</h2>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lastname" placeholder="Your last name.." />

        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" placeholder="Email.." />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password.." />

        <label htmlFor="lname">Confirm password</label>
        <input
          type="password"
          name="confirm password"
          placeholder="Confirmed Password."
        />

        <label htmlFor="phone number">Phone Number</label>
        <input type="text" name="phone number" placeholder="Phone number.." />

        <label htmlFor="gender">Gender</label>
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="address">address</label>
        <input type="text" name="address" placeholder="Address.." />

        <label htmlFor="country">Country</label>
        <select name="country">
          <option value="pakistan">Pakistan</option>
        </select>

        <label htmlFor="state">State</label>
        <select name="state">
          <option value="pubjab">Pubjab</option>
        </select>

        <label htmlFor="city">City</label>
        <select name="city">
          <option value="attock">Attock</option>
        </select>

        <label htmlFor="zip code">Zip code</label>
        <input type="text" name="zip code" placeholder="Your last name.." />

        <input type="submit" value="Create An Account" />
        <Link to="/signin">Already have an account</Link>
      </form>
    </div>
  );
};
