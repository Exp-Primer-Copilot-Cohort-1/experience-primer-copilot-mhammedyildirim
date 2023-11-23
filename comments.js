// Create a web server
// Use the express library to create a web server
const express = require("express");
const app = express();
const port = 3000;

// Use the express-handlebars library
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Path: comment.js
// Use the body-parser library to parse the form data sent by the client
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Path: comment.js
// Use the express-session middleware
const session = require("express-session");
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

// Path: comment.js
// Add a route to the home page
app.get("/", (req, res) => {
  res.render("home", { comments: comments });
});

// Path: comment.js
// Add a route to the /comments/new path
app.get("/comments/new", (req, res) => {
  res.render("comments-new");
});

// Path: comment.js
// Add a route to the /comments path
app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.redirect("/");
});

// Path: comment.js
// Add a route to the /comments/:id path
app.get("/comments/:id", (req, res) => {
  const comment = comments[req.params.id];
  res.render("comments-show", { comment: comment });
});

// Path: comment.js
// Add a route to the /comments/:id/edit path
app.get("/comments/:id/edit", (req, res) => {
  const comment = comments[req.params.id];
  res.render("comments-edit", { comment: comment, id: req.params.id });
});

// Path: comment.js
// Add a route to the /comments/:id path
app.put("/comments/:id", (req, res) => {
  comments[req.params.id] = req.body;
  res.redirect(`/comments/${req.params.id}`);
});

// Path: comment.js
// Add a route to the /comments/:id/delete path
app.delete("/comments/:id", (req, res) => {
  delete comments[req.params.id];
  res.redirect("/");
});

// Path: comment.js
// Listen on
