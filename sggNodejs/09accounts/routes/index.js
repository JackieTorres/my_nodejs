var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/accounts", (req, res) => {
  res.render("list");
});
router.get("/accounts/create", (req, res) => {
  res.render("create");
});
router.post("/accounts", (req, res) => {
  console.log(req.body);
  res.send("添加成功");
});

module.exports = router;
