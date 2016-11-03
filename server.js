console.log('The server is running');

const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

ReactDOM.render(
<h1>Hello, world!</h1>,
    document.getElementById('example')
);
var db;

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://elsk:lakris4Eva@ds019996.mlab.com:19996/bookyear', (err, database) => {
    if (err) return console.log(err);
    db = database;

    app.listen(3000, function() {
        console.log('listening on 3000')
    });
})


app.get('/', (req, res) => {
    var cursor = db.collection('booksreaed').find()

    db.collection('booksread').find().toArray(function(err, results) {
        console.log(results)
        // send HTML file populated with quotes here
    })

    //res.sendFile('/Users/elise.skaug.kjondal/Documents/Personal/bookyear' + '/index.html')

});

app.post('/booksread', (req, res) => {
    db.collection('booksread').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})