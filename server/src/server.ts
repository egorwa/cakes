import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", (req, res) => {
  res.send("Cake server is running");
});

// READ - get all cakes
app.get("/api/cakes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cakes ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get cakes" });
  }
});

// CREATE - add a new cake
app.post("/api/cakes", async (req, res) => {
  try {
    const { name, description, price, image_url } = req.body;
    const result = await pool.query(
      "INSERT INTO cakes (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, price, image_url || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add cake" });
  }
});

// UPDATE - edit a cake
app.put("/api/cakes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image_url } = req.body;
    const result = await pool.query(
      "UPDATE cakes SET name = $1, description = $2, price = $3, image_url = $4 WHERE id = $5 RETURNING *",
      [name, description, price, image_url || null, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update cake" });
  }
});

// DELETE - remove a cake
app.delete("/api/cakes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM cakes WHERE id = $1", [id]);
    res.json({ message: "Cake deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete cake" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});