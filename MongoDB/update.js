const dbConnect = require("./mongodb");

const updateData = async () => {
  const db = await dbConnect();
  const result = await db.updateOne(
    { name: "nokia 360" },
    { $set: { name: "nokia 3310" } }
  );
  if (result.acknowledged) {
    console.log("Data Upadated");
  }
};
updateData();
