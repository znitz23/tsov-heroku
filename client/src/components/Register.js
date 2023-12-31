import React, { useEffect, useState } from "react";
import { authenticateNewUser } from "../api/authenitcate.js";
import { fetchUser } from "../api/users.js";
import { CredentialsStyled } from "./styled/Home.styled.js";

const Register = ({ setToken, setIsLoggedIn, setUser, setShowRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !username ||
      !password ||
      !confirmedPassword ||
      password != confirmedPassword
    ) {
      alert("Must enter a username and matching passwords.");
    } else {
      const data = await authenticateNewUser({
        username: username,
        password: password,
      });
      const user = await fetchUser(data.token);
      if (data.token) {
        setToken(data.token);
        setIsLoggedIn(true);
        setUser(user);
      } else {
        alert("That Username is already taken");
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
          <input
            placeholder="Confirm Password"
            type="password"
            value={confirmedPassword}
            onChange={(event) => setConfirmedPassword(event.target.value)}
          ></input>
          <button type="submit">Register</button>
        </form>
        <div className="right-cred">
          <button onClick={() => setShowRegister(false)} className="close">
            X
          </button>
          <h1>Welcome!</h1>
          <h4>To create an account, please enter a username and password</h4>
        </div>
      </section>
    </>
  );
};

export default Register;
