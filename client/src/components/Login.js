import React, { useState } from "react";
import { authenticateUser } from "../api/authenitcate.js";
import { fetchUser } from "../api/users.js";
import { CredentialsStyled } from "./styled/Home.styled.js";

const Login = ({ setToken, setIsLoggedIn, setUser, setShowLogIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Must enter a username and password.");
    } else {
      const { token } = await authenticateUser({
        username: username,
        password: password,
      });
      const user = await fetchUser(token);
      if (token) {
        setToken(token);
        setIsLoggedIn(true);
        setUser(user);
      } else {
        alert("Incorrect Username or Password, please try again");
      }
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
        <div>
          <h1>Welcome back!</h1>
          <h4> Please Log In</h4>
          <button onClick={() => setShowLogIn(false)} className="close">
            X
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
