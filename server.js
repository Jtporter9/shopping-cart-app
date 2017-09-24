// Dependances
var express = require('express')
, MongoClient = require('mongodb').MongoClient
, bodyParser = require('body-parser')
, cors = require('cors')
, path = require('path')
, db = require('./server/db.js')

// Constants
, port = process.env.PORT || 3000
, app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '/client/')))
app.use('/node_modules',  express.static(path.join(__dirname + '/node_modules')))

// Connect to Mongo on start
db.connect('mongodb://superuser:password@localhost:27017/admin', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
      app.listen(port, function() {
        console.log('Listening on port ' + port)
      })
    }
  })
