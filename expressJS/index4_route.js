const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const exp = require("constants");
const route = express.Router();
// app.use(reqFilter); to apply route on all app
route.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("welcom to Home Page");
});
// app.get("/users",reqFilter, (req, resp) => {
//   resp.send("welcom to Users Page");
// });
// this is how to apply single route on app
route.get("/users", (req, resp) => {
  resp.send("welcom to Users Page");
});
route.get("/about", (req, resp) => {
  resp.send("welcom to About Page");
});
app.use("/", route);
app.listen(5000);
