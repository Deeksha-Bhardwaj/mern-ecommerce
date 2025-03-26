const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTg3ZDliZDY3MWZjNmIwYWQyN2JjYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMzODUyNTcxfQ.m-57e3zHQRRbmmmEJj6565GnBCP-rBpRutqg06d9aLk";
  return token;
};