const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

const getUsersFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class User {
  constructor(
    id,
    firstName,
    lastName,
    email,
    mobile,
    authorization

  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
    this.authorization = authorization;
  }

  save(cb) {
    getUsersFromFile((users) => {
      this.id = Math.random().toString();
      users.push(this);

      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log(err);
      });
      cb(this);
    });
  }

  static fetchAllByAuthentication(authorization,cb) {
    getUsersFromFile((users) => {
      // const user = users.find(user => user.authorization === authorization);
      const filteredUser  = users.filter(user => user.authorization == authorization);
      cb(filteredUser);
    });
  }


  static fetchRecentByAuthentication(authorization,cb) {
    getUsersFromFile((users) => {
      // const user = users.find(user => user.authorization === authorization);
      const filteredUser  = users.filter(user => user.authorization == authorization);
      const  lastFiveUser = filteredUser.slice(Math.max(filteredUser.length - 5, 0))
      cb(lastFiveUser);
    });
  }
};
