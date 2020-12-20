const express = require("express");
const data = require("./data/products");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.find((product) => product._id === productId);

  res.json(product);
});
app.listen(5000, () => {
  console.log("server now listening");
});
