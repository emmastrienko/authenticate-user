const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.get("/", (req, res) => {
  try {
    const userdata = req.body;
    console.log(userdata);

    if (!userdata.email) {
      res.status(400).send("User email not available");
    }

    userController.findUser(userdata.email, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  } catch (error) {
    res.status(500).send("Unexpected error while getting the user");
  }
});

module.exports = router;
