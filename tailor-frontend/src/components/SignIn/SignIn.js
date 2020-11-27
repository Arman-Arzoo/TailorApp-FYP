import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./../../context/GlobalContexts";
import axios from 'axios';
import ErrorNotice from "../misc/errorNotices";

export const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(GlobalContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const logInUser = { email, password };
      const loginRes = await axios.post("/users/signin", logInUser);

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/udashboard");

    }
    catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit = {submit}>
          <h2 className="text-center">LOG IN</h2>

          {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />}
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" placeholder="Email.." onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)}/>

        <input type="submit" value="SIGN IN" />
      </form>
    </div>
  );
};
