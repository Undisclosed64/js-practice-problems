const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  try {
    User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({
      msg: "User created successfully!",
    });
  } catch (err) {
    if (err) {
      res.json(err);
    }
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.json({ courses: courses });
  } catch (err) {
    res.json(err);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const course = await Course.findById(req.params.courseId);
    course.isPurchased = true;
    await course.save();
    res.json({ message: "Course purchased succesfully!", course: course });
  } catch (err) {
    res.json(err);
  }
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
