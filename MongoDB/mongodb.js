const { MongoClient } = require("mongodb");
// const MongoClient = requrire("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "e-comm"; //to which database we want to connect

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}
module.exports = dbConnect;
