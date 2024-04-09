const jwt = require("jsonwebtoken");
const path = require("path");
const config = require(path.join(__dirname, "..", "..", "config"));

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).send("A token is required for authorization");
  }

  try {
    const decoded = jwt.verify(token, config.AUTH_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send("Invalid Token"); 
  }
};

module.exports = verifyToken;
