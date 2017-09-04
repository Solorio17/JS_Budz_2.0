const express = require("express"),
      path    = require("path"),
      bodyParser = require("body-parser");

const app = express(),
      port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index");
})

app.get("/inventory", (req, res, next) => {
  res.render("inventory");
});

app.get("/inventory/budz", (req, res, next) => {
  res.render("inventorybudz");
});

app.get("/inventory/dabs", (req, res, next) => {
  res.render("inventorydabs")
});

app.get("/ourteam", (req, res, next) => {
  res.render("ourteam")
});

app.listen(port, () => {
  console.log("Server Listening on Port..."+port)
})
