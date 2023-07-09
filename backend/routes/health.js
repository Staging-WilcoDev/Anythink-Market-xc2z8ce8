var router = require("express").Router();

router.get("/", (req, res, next) => {
  res.sendStatus(20);
});

module.exports = router;
