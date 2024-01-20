const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  try {
    const admin = Admin.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({
      msg: "Admin created successfully!",
    });
  } catch (err) {
    if (err) {
      res.json(err);
    }
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const course = await Course.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imgLink: req.body.imgLink,
    });
    res.json({
      msg: "Course created successfully!",
      courseId: course._id,
    });
  } catch (err) {
    if (err) {
      res.json(err);
    }
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    res.json({ courses: courses });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
