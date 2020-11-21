import React from "react";

export const SignIn = () => {
  return (
    <div className="form-container">
      <form>
          <h2 className="text-center">LOG IN</h2>
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" placeholder="Email.." />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password.." />

        <input type="submit" value="Create An Account" />
      </form>
    </div>
  );
};
