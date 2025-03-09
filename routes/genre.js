const express = require("express");
const sql = require("../database"); // Pastikan path benar
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { search } = req.query;

    let query = `
      SELECT name, status, id, created_at
      FROM genre
    `;
    let params = [];

    if (search) {
      query += ` WHERE name ILIKE $1 OR description ILIKE $2`;
      params.push(`%${search}%`, `%${search}%`);
    }

    // Perbaiki cara pemanggilan query
    const novels = await sql.unsafe(query, params);

    res.status(200).json({
      message: "Get data success",
      data: novels,
      totalData: novels.length
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
