const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "auth.json"
);

const getUsersAuthenticationFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Auth {
  static checking(authorization, fingerPrint, deviceToken, cb) {
    // Get All Data From File
    getUsersAuthenticationFromFile((users) => {
      // search obj by authorization
      const user = users.find((u) => {
        console.log(authorization , fingerPrint);
        return (u.authorization === authorization && u.fingerPrint === fingerPrint && u.deviceToken == deviceToken);
      });
      cb(user);
    });
  }
};
