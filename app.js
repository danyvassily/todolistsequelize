const express = require("express");
const sequelize = require("./config/database.js");
const taskRoutes = require("./routes/taskRoutes");
const completedRoutes = require("./routes/completedRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/completed", completedRoutes);
app.use("/users", userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synced");
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((err) => console.log("Database connection error:", err));

module.exports = app;
