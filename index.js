const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db/db");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;
const { getUserByUsername, createUser, getUser } = require("./db/users");
const { requireUser } = require("./utilities");
pool.connect();
const morgan = require("morgan");
const {
  getSessionsByUsername,
  createSession,
  deleteSession,
} = require("./db/sessions");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");
  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    const { username } = jwt.verify(token, JWT_SECRET);
    if (username) {
      req.user = await getUserByUsername(username);
      next();
    }
  } else {
    next({ message: "Authorization error" });
  }
});

// USERS

// get user

app.get("/users/me", requireUser, async (req, res, next) => {
  try {
    const { username } = req.user;
    const user = await getUserByUsername(username);
    res.send(user);
  } catch (error) {
    console.error(error);
  }
});

// create user

app.post("/users/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const _user = await getUserByUsername(username);
    if (_user) {
      next({
        error: "Error",
        name: "UserExistsError",
        message: `User ${username} is already taken.`,
      });
    }

    if (password.length < 5) {
      next({
        error: "Error",
        name: "Password Too Short!",
        message: "Password Too Short!",
      });
    }

    const newUser = await createUser({
      username,
      password,
    });

    const token = jwt.sign(
      {
        username: newUser.username,
        password: newUser.password,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1y",
      }
    );

    res.send({
      username: newUser.username,
      message: "thank you for registering",
      token,
    });
  } catch (error) {
    console.error(error);
  }
});

// verify user

app.post("/users/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next({
      error: "Error",
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }
  try {
    const user = await getUser(username, password);

    const token = jwt.sign(
      {
        username: user.username,
        password: user.password,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2w",
      }
    );

    res.send({
      username: user.username,
      message: "you're logged in!",
      token,
    });
  } catch (error) {
    console.error(error);
  }
});

// SESSIONS

// get all sessions from user

app.get("/sessions/all/:username", async (req, res, next) => {
  const { username } = req.params;
  try {
    const sessions = await getSessionsByUsername(username);
    res.send(sessions);
  } catch (error) {
    next(error);
  }
});

// create session

app.post("/sessions/create", async (req, res, next) => {
  const { date, game, day, buy_in, cash_out, wl, notes, username, duration } =
    req.body;
  try {
    const newSession = await createSession({
      date,
      game,
      day,
      buy_in,
      cash_out,
      wl,
      notes,
      username,
      duration,
    });
    res.send(newSession);
  } catch (error) {
    next(error);
  }
});

// delete session

app.delete("/sessions/:id/delete", async (req, res, next) => {
  const sessionId = req.params.id;
  try {
    const deletedSession = await deleteSession(sessionId);
    res.send({ message: "Session Deleted", deletedSession });
  } catch (error) {
    next(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
