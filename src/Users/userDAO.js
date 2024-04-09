const users = require("./users.json");
const fs = require("fs");

function findUser(email, done) {
  const userFetched = users.filter((user) => user.email === email);
  if (!userFetched.length === 0) {
    done("User not found", undefined);
  } else {
    done(undefined, userFetched[0]);
  }
}

function registerUser(userData, done) {
  users.push(userData);
  let data = JSON.stringify(users, null, 2);
  fs.writeFile("./users.json", data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
  done(undefined, userData);
}

module.exports = {
  findUser,
  registerUser,
};
