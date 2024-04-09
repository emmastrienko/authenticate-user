const userDao = require("./userDAO");

function findUser(email, done) {
  userDao.findUser(email, done);
}

function registerUser(userData, done) {
  userDao.registerUser(userData, done);
}

module.exports = {
  findUser,
  registerUser,
};
