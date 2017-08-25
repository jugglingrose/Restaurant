var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.get('/', function (req,res){
  res.render('index');
})

app.get('/about', function (req,res){
  console.log("request for about was made");
  res.render("about");
})

app.get('/menu', function (req,res){
  console.log("request for menu was made");
  res.render("menu");
})

app.get('/contact', function (req, res){
  console.log("request for contact page was made");
  res.render("contact");
})

app.listen(3000);

/*
app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));
*/
