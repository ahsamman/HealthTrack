const express = require('express');
const bodyParser= require('body-parser');
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(__dirname + '/public/'));
// app.use(express.static('public'));
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Arya:stark@cluster0-g529m.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("FinalProject").collection("Final");
  // perform actions on the collection object
  
  app.listen(3000, function() {
    console.log('listening on 3000');
  });
  app.get('/', function(req, res) {
    let cursor = client.db("FinalProject").collection("Final").find().toArray(function(err, results) {
      //if (err) return console.log(err);
      console.log(results);
      res.render('index.ejs', {measures: results})
      // send HTML file populated with quotes here
    });

    //res.render('index');
    //res.sendFile('/Users/ahmedelsamman/Documents/Workspace/Final Project/index.html');
  });
  app.post('/adddata', (req, res) => {
    collection.insertOne(req.body,(err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      //res.redirect('/')
    })
  });
});
client.close();


 