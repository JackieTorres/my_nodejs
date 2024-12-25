const express = require("express");
const router = express.Router();

function checkMidd(req, res, next) {
  if (req.query.code === "9527") {
    next();
  } else {
    res.send("密文错误");
  }
}

router.get("/home", (req, res) => {
  res.send("前台");
});
router.get("/admin", checkMidd, (req, res) => {
  res.send("后台");
});

module.exports = router;
