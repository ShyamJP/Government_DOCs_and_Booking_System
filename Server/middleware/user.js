const jwt = require("jsonwebtoken");
const { secret } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const splitter = token.split(" ");
  const jwtToken = splitter[1];

  try {
    const decoder = jwt.verify(jwtToken, secret);
    if (decoder.username) {
      next();
    } else {
      res.status(403).json({ message: "You are not authenticated user" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
}

module.exports = userMiddleware;

