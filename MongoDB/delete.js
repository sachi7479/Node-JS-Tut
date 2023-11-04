const dbConnect = require("./mongodb");

const deleteData = async () => {
  const db = await dbConnect();
  const result = await db.deleteOne({ name: "nokia 3310" });
  if (result.acknowledged && result.deletedCount === 1) {
    console.log("Data Deleted");
  }
};
deleteData();
