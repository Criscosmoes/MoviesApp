const router = require("express").Router();

router.get("/testing", async (req, res) => {
  res.send("this is working");
});

module.exports = router;
