var express = require("express");
var router = express.Router();
var { formidable } = require("formidable");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/portrait", (req, res) => {
  res.render("portrait.ejs");
});
router.post("/portrait", (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/images",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // res.json({ fields, files });
    // console.log(fields);
    // console.log(files);
    res.send({ fields, files });
  });
});

module.exports = router;
