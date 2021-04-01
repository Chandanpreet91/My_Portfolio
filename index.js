const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get('/about_me', (req,res) => {
  res.render('about_me')
});
app.get('/my_projects', (req,res) => {
  res.render('my_projects')
});
app.get('/my_resume',(req,res) => {
  res.render('my_resume');
});
app.get('/contact_me', (req,res) => {
  res.render('contact_me')
})
app.post('/contact_me', (req,res) => {
  res.render('thankyou');
})
const PORT = 3000;
const ADDRESS = "localhost";

app.listen(PORT, ADDRESS, () => {
  console.log(`Application listening at ${ADDRESS}:${PORT}`);
});
