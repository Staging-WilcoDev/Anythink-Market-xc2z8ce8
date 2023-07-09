var router = require("express").Router();

router.get("/", (req, res, next) => {
  res.sendStatus("ok");
});
