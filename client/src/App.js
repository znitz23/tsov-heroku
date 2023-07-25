import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js";
import Statistics from "./components/Statistics.js";
import Results from "./components/Results.js";
import { fetchUserSessions } from "./api/sessions.js";
import { fetchUser } from "./api/users.js";
import { Container } from "./components/styled/Container.styled.js";

function App() {
  const [sessions, setSessions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [addedSession, setAddedSession] = useState(false);

  useEffect(() => {
    const getInitialData = async () => {
      if (token) {
        const me = await fetchUser(token);
        setUser(me);
        setIsLoggedIn(true);
      }
    };
    getInitialData();
  }, [token]);

  useEffect(() => {
    const getInitialSessions = async () => {
      if (user.username) {
        const fetchedSessions = await fetchUserSessions(user.username, token);
        setSessions(fetchedSessions);
      }
    };
    getInitialSessions();
  }, [user.username, token]);

  useEffect(() => {
    const getNewSessions = async () => {
      if (token && user.username) {
        const fetchedSessions = await fetchUserSessions(user.username, token);
        setSessions(fetchedSessions);
      }
    };
    getNewSessions();
  }, [addedSession, token, user.username]);

  return (
    <>
      <Navbar
        token={token}
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
        isLoggedIn={isLoggedIn}
      />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                token={token}
                setToken={setToken}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                sessions={sessions}
                user={user}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Results
                token={token}
                sessions={sessions}
                setSessions={setSessions}
                user={user}
                addedSession={addedSession}
                setAddedSession={setAddedSession}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
