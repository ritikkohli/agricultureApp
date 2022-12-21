const express  = require('express')
const bodyParser = require('bodyParser')
const mongoose = require('mongoose')
const app = express()
const route = require('./routes/route.js')

app.use(bodyParser.json())
app.use(bodyParser.unlincoded({extented:true}))

mongoose.connect("",{useNewUrlParser:true})
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});