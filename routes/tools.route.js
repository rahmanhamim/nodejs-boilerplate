const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("tools found");
});

router.post("/tools", (req, res) => {
    res.send("tools added");
});

module.exports = router;
