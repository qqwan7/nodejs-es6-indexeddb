/**
 * Created by qqwan on 2018/11/8.
 */
require('babel-register')
require('./table.js')
const express = require('express');

const app = express()
const path = require('path')
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/indexeddb.html'));
    // res.send('Hello!')
})
app.route('/*')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname + '/indexeddb.html'));
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
