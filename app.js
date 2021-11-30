const express = require("express");
const bp = require("body-parser");
const jimp=require("jimp");
const app = express();
app.use(express.static("public"));
app.use(bp.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
var x = "image/my.jpg";
app.get("/", function(req, res) {

  res.render('index', {
    Title: "Welcome to our website.",
    img: x
  });
})

app.post("/", function(req, res) {
  var element = req.body.n;
  const img=jimp.read("public/image/my.jpg",function(err,fun){
    if(err) throw err;
    fun.greyscale().write('out.jpg');
  });
  res.redirect("/");
})


app.listen(process.env.PORT || 3000, function() {
  console.log("server started on port 3000");
})
