import express from "express";

const app = express();

// db connection
// database:5423

app.get("/", (req, res) => {
  res.send("Hello World for the second time with hot code reloading!");
});

app.get("/test", (req, res) => {
  res.send("Hello test!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
