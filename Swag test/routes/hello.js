/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Get a hello message
 *     description: Returns a hello message in JSON format.
 *     responses:
 *       200:
 *         description: A JSON object with a hello message.
 *         content:
 *           application/json:
 *             example: { "message": "Hello, World!" }
 */

const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

module.exports = router;
