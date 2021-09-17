import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();

  const signIn = () => {
    axios.post("http://localhost:5000/api/login", {username, password})
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username)
        history.push('/bubble-page')
      })
      .catch(err => {
        console.log(err)
        setError(err.error)
      })
  }

  const handleSubmit = e => {

    e.preventDefault();
    signIn();
  }

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState(null);
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login Here</h2>

        <input
          type="text"
          name="username"
          value={username}
          id="username"
          onChange={e => setUsername (e.target.value)}
        />

        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={e => setPassword (e.target.value)}
        />

        <button id="submit" onClick={handleSubmit}>Log in</button>


      </div>
      {error != null && <p id="error" className="error">{error}</p>}

    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"