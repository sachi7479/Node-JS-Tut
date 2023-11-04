const express = require("express");
const EventEmitter = require("events");
const exp = require("constants");
const { count } = require("console");
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("CountAPI", () => {
  count++;
  console.log("event called", count);
});

app.get("/", (req, resp) => {
  resp.send("Api called");
  event.emit("CountAPI");
});

app.get("/search", (req, resp) => {
  resp.send("search api called");
  event.emit("CountAPI");
});

app.get("/update", (req, resp) => {
  resp.send("update api called");
  event.emit("CountAPI");
});
