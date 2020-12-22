const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productsRoutes");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("server now listening");
});
