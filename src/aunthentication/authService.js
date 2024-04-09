const jwt = require("jsonwebtoken");
const path = require("path");
const config = require(path.join(__dirname, "..", "..", "config"));

function verifyUser({ email, password }, userData) {
  if (userData === undefined) {
    return false;
  } else {
    if (email === userData.email && password === userData) return true;
  }
}

function createJWT(userData) {
  const payload = {
    role: "USER",
    email: userData.email,
    password: userData.password,
  };

  const token = jwt.sign(payload, config.AUTH_SECRET, {
    expiresIn: 3600,
  });

  return token;
}

module.exports = {
  verifyUser,
  createJWT,
};
