const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "Dell Inspiron",
    price: 799,
    brand: "DELL",
    category: "Laptop",
  });
  let result = await data.save();
  console.log(result);
};
const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "redmi" },
    {
      $set: { price: 700 },
    }
  );
  console.log(data);
};
const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "redmi" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.find();
  console.log(data);
};

findInDB();
