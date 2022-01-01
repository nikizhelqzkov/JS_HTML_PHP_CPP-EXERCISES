import express from "express";
import { createToken, verify } from "../jwt.js";

const userRouter = express.Router();

const withToken = (req, res, next) => {
  const token = req.cookies["auth-token"];
  if (token) {
    verify(token)
      .then(() => next())
  } else {
    res.status(401).send("Error with missing token");
  }
};

function* idGen() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
const users = [{ id: 0, email: "test@abv.bg", password: "123" }];
userRouter.post("/registration", (req, res) => {
  const { email, password } = req.body;
  if (users.some((user) => user.email === email)) {
    res.status(400).send("This user has already registered.");
  }
  const gen = idGen();
  const id = gen.next().value;
  users.push({ id, email, password });
  res.status(201).send("User created");
});

userRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (
    users.some((user) => user.email === email && user.password === password)
  ) {
    createToken(email).then((token) => {
      res.cookie("auth-token", token, { httpOnly: true });
      res.redirect("/users.html");
    });
  } else {
    res.status(401).send();
  }
});

userRouter.get("/getUsers",withToken, (req, res) => {
  res.json(users);
});

export default userRouter;
