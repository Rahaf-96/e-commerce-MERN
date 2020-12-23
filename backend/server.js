const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middlewares/errorsMiddleware");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("server now listening");
});
