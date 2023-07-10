var router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("Anythink backend is up.");
});

router.use("/health", require("./health"));
router.use("/api", require("./api"));

module.exports = router;
