var express = require("express");
var router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const shortid = require("shortid");
const adapter = new FileSync(__dirname + "/../data/db.json");
const db = low(adapter);

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
  let id = shortid.generate();
  db.get("accounts")
    .unshift({ id: id, ...req.body })
    .write();
  res.send("添加成功");
});

module.exports = router;
