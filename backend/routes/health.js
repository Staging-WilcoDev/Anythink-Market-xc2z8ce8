var router = require("express").Router();

router.get("/", (req, res, next) => {
  res.sendStatus(100);
});

module.exports = router;
