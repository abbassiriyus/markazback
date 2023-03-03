var express = require('express');
var app = express();
var cors = require('cors')
const upload = require("express-fileupload")
const teacher=require('./Routes/teacher.js')

app.use(upload())
app.use(express.static("data"))
app.use('/', teacher)
app.options('*', cors());
app.listen(8000, function () {
    console.log('Listening to Port 8000');
});