import React from 'react';
import Emoji from '../components/Emoji';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Emoji />
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
