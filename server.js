var express = require('express')
var exphbs  = require('express-handlebars');
var app = express()
var path = require("path");


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))


app.get('/', function (req, res) {
  res.render('home');
});

app.listen(process.env.PORT || 8000)
// app.listen(8000, function () {
//   console.log('Server is running on 8000')
// });