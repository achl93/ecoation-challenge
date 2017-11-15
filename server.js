const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const data = require('./src/dataModel');
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://achleung:eco1234@ds259105.mlab.com:59105/ecoation');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

// app.get('/login', function(request, response) {
  
// });

// app.get('/register', function(request, response) {
//   data.find((err, data) => {
//     if (err) {
//       response.send(err);
//     } else {
//       response.json(data);
//     }
//   });
// });

// app.post('/register', function(request, response) {
//   let newData = new data();
//   newData.email = request.body.email;
//   newData.password = request.body.password;
//   newData.save((err) => {
//     if (err) {
//       response.send(err);
//     } else {
//       response.json({ message: 'Successfully added!' });
//     }
//   });
// });

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
