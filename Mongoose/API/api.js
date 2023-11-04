const express = require("express");
require("./config.js");
const Product = require("./product.js");

const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});
app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});
app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

app.listen(5000);
