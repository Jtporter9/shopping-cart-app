// Dependances
var express = require('express')
, MongoClient = require('mongodb').MongoClient
, bodyParser = require('body-parser')
, cors = require('cors')
, path = require('path')
, mongoose = require('mongoose')
, db = require('./server/db.js')

// Constants
, port = process.env.PORT || 3000
, serverPath = 'mongodb://superuser:password@localhost:27017/admin'
, app = express()

// Routes
, FoodsController = require('./server/controllers/foodsController.js')

app.use(bodyParser.json())
app.use(cors())

 app.use(express.static(path.join(__dirname, '/client/')))
 app.use('/node_modules',  express.static(path.join(__dirname + '/node_modules')))

// Connect to Mongo on start
mongoose.connect(serverPath, { useMongoClient: true }, function(err) {
  if (err) {
    console.log('Unable to connect database.')
    process.exit(1)
  } else {
    connected();
    }
  })

  function connected () {    
      // app.get('/foods', function(req, res) {
      //   mongoose.model('foods').find(function(err, users) {
      //     res.send(users);
      //   })
      // })

      app.get('/foods', FoodsController.findFood);
    
        app.listen(port, function() {
          console.log('Listening on port ' + port)
        })


  } // End of Connected
