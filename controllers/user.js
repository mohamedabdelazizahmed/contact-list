const User = require("../models/user");
const Auth = require("../models/auth");

exports.getUsers = (req, res, next) => {
  console.log("Hello Get Users");
  authorization = req.query.authorization;
  fingerPrint = req.query.fingerPrint;
  deviceToken = req.query.deviceToken;
  page  = req.query.page;
  limit  = req.query.limit;

  startIndex = (page - 1 ) * limit;
  endIndex = page * limit;

  Auth.checking(authorization, fingerPrint, deviceToken, (user) => {
    // User Authenticated
    User.fetchAllByAuthentication(user.authorization, (users) => {
      console.log(users);
      resultUsers = users.slice(startIndex ,endIndex);
      res.status(200).json({
        status: 200,
        message: "GET ALL Users",
        users: resultUsers,
      });
    });
  });
};

exports.postAddUser = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const authorization = req.body.authorization;
  const fingerPrint = req.body.fingerPrint;
  const deviceToken = req.body.deviceToken;
  Auth.checking(authorization, fingerPrint, deviceToken, (userAuth) => {
    console.log(userAuth);
    const user = new User(null, firstName, lastName, email, mobile,userAuth.authorization);
    user.save((userCreate) => {
      console.log(userCreate);
      res.status(201).json({
        "status":201,
        "message":"The User Created Successfully",
        userCreated: userCreate,
      });
    });

  });
};
exports.postRecentUser = (req, res, next) => {
  const authorization = req.body.authorization;
  const fingerPrint = req.body.fingerPrint;
  const deviceToken = req.body.deviceToken;


  Auth.checking(authorization, fingerPrint, deviceToken, (userAuth) => {
    console.log(userAuth);
    User.fetchRecentByAuthentication(userAuth.authorization, (users) => {

      res.status(200).json({
        status: 200,
        message: "GET Recent User",
        users: users,
      });
    });

  });
};