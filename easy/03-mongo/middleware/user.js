const { User } = require("../db/index");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const user = User.findOne({
      username: username,
      password: password,
    });
    if (!user) {
      res.status(404).json({ msg: "user not found!" });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    if (err) {
      res.json("something went wrong");
    }
  }
}

module.exports = userMiddleware;
