const userService = require("./userService");

function findUser(email, done) {
  userService.findUser(email, done);
}

module.exports = {
  findUser,
};
