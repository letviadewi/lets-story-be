const express = require("express");
const auth = require("../auth")
const jwt = require('jsonwebtoken')
const database = require("../database");
const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
  database.query(
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`,
    (error, result) => {
      if (error) {
        res.status(500).json({error : "internal server error"});
      } else if (result.length === 0) {
        res.status(404).json({ error: "Login Failed" });
      } else {
        const token = jwt.sign({ username }, auth.secretKey, { expiresIn: "1h" });
        res.json({ token });
      }
    }
  );
});

module.exports = router;