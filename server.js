const express = require("express");
const oracledb = require("oracledb");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your index.html inside public folder)
app.use(express.static(path.join(__dirname, "public")));

// Oracle DB Config
const dbConfig = {
  user: "system",
  password: "myNewPass123",  // 🔑 replace with your actual password
  connectString: "localhost:1521/orcl"
};

// Handle form submission
app.post("/submit", async (req, res) => {
  const { name, email } = req.body;

  try {
    let connection = await oracledb.getConnection(dbConfig);

    await connection.execute(
      `INSERT INTO myappdb (name, email) VALUES (:name, :email)`,
      [name, email],
      { autoCommit: true }
    );

    res.send("✅ Data saved successfully!");
    await connection.close();
  } catch (err) {
    console.error("❌ Database Error: ", err);
    res.status(500).send("❌ Error saving data: " + err.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
