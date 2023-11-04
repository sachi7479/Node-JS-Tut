const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "./public");

// app.use(express.static(publicPath));
app.set("view engine", "ejs");

app.get("/profile", (req, resp) => {
  const user = {
    name: "sachin",
    email: "sachin@test.com",
    city: "Inodre",
    skill: ["c", "c++", "python", "nodeJs"],
  };
  resp.render("profile", { user });
});
app.get("/login", (req, resp) => {
  resp.render("login");
});

app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (req, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});
app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(5000);
