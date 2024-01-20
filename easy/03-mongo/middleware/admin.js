const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const admin = await Admin.findOne({
      username: username,
      password: password,
    });
    if (!admin) {
      res.status(404).json({ msg: "admin not found!" });
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

module.exports = adminMiddleware;
