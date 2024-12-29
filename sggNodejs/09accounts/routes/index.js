var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/accounts", (req, res) => {
  res.send("账本列表");
});
router.get("/accounts/create", (req, res) => {
  res.send("添加记录");
});

module.exports = router;
