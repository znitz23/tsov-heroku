import React, { useState } from "react";
import { Nav } from "./styled/NavBar.styled";
import Register from "./Register";
import Login from "./Login";
import { CredentialsStyled, WelcomeStyled } from "./styled/Home.styled";
import { Container } from "./styled/Container.styled";
import Statistics from "./Statistics";

const HomePage = ({
  token,
  setToken,
  setUser,
  setIsLoggedIn,
  isLoggedIn,
  sessions,
  user,
}) => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <Container>
          {!showLogIn && !showRegister ? (
            <WelcomeStyled>
              <h1>Welcome to 3 Streets of Value.</h1>
              <span>
                Please
                <button onClick={() => setShowLogIn(true)}>
                  Login
                </button> or{" "}
                <button onClick={() => setShowRegister(true)}>Register</button>
              </span>
            </WelcomeStyled>
          ) : (
            <></>
          )}

          {showRegister ? (
            <CredentialsStyled>
              <Register
                setShowRegister={setShowRegister}
                token={token}
                setToken={setToken}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
              />
            </CredentialsStyled>
          ) : (
            <></>
          )}
          {showLogIn ? (
            <CredentialsStyled>
              <Login
                setShowLogIn={setShowLogIn}
                token={token}
                setToken={setToken}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
              />
            </CredentialsStyled>
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <Container>
          <WelcomeStyled>
            <h1>Welcome back to 3 Streets of Value</h1>
          </WelcomeStyled>
          <Statistics sessions={sessions} user={user} />
        </Container>
      )}
    </>
  );
};

export default HomePage;
