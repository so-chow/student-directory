//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const db = require('./models');

//app set up
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
// OR const port = process.env.PORT || 3000;

app.use(bodyParser.json());
// OR app.use(bodyParser.urlencoded({extended: false}));

//app routes
app.get('/', function(req,res){
  res.send('Hello World!');
})

//app start
app.listen(3000, function(){
  console.log('Server running on port 3000!')
})
//OR
// app.listen(port, function(err) {
//   if (err) {
//     console.log(`Error starting server on port ${port}`, err);
//   } else {
//     console.log(`Server running on port ${port}.`);
//   }
// });
