const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a user

app.post("/users", async (req, res) => {
  try {
    const { user_name } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (user_name) VALUES($1) RETURNING *",
      [user_name]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all users

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a user

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a user

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name } = req.body;
    const updateUser = await pool.query(
      "UPDATE users SET user_name = $1 WHERE user_id = $2",
      [user_name, id]
    );

    res.json("User was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a user

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [
      id
    ]);
    res.json("User was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
