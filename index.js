const express = require("express");
const app = express();
// Routes
const usersRouter = require("./src/routes/users");
const signupRouter = require("./src/routes/signup");
const signinRouter = require("./src/routes/signin");
// Middleware
const authenticateJWT = require("./src/auth");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/", usersRouter);
app.use("/", signupRouter);
app.use("/", signinRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
