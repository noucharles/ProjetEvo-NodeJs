const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'public')));
// app.use('/static',express.static('monDossier'));

app.get('/', (req, res) => res.render('index.html'));

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('nous sommes connectés')
});
(require('./routes'))(app)

app.listen(port, () => console.log(`Example app listening on port!`));