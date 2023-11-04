const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    { name: "infinix", brand: "Gt neo 3", price: 199, category: "mobile" },
    { name: "poco", brand: "F5", price: 399, category: "mobile" },
    { name: "redmi", brand: "note 12 pro", price: 299, category: "mobile" },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};
insert();
