const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateJWT(req, res, next) {
  // Get Authentication Header
  const authHeader = req.headers.authorization;

  // Check if bearer token exists
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.DB_JWT_SECRET, (err, user) => {
      if (err) {
        res.sendStatus(403);
      }

      req.user = user;

      next();
    });
  } else {
    res.sendStatus(403);
  }
}

module.exports = authenticateJWT;
