// Dependances
var express = require('express')
, MongoClient = require('mongodb').MongoClient
, db = require('./db.js')
, app = express()

  app.engine('jade', require('jade').__express)
  app.set('view engine', 'jade')
  
app.get('/', function (req, res) {
    res.send('Hello World');
})

  // Connect to Mongo on start
db.connect('mongodb://superuser:password@localhost:27017/admin', function(err) {
    if (err) {
      console.log('Unable to connect to Mongo.')
      process.exit(1)
    } else {
      app.listen(3000, function() {
        console.log('Listening on port 3000...')
      })
    }
  })

// app.listen(3000, function () {
//     console.log('Listening on port 3000!')
//   })