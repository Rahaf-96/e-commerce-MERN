const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productsRoutes");
const { notFound, errorHandler } = require("./middlewares/errorsMiddleware");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("server now listening");
});
