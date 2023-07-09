var router = require("express").Router();

router.get("/", (req, res, next) => {
  res.sendStatus(300);
});

module.exports = router;
