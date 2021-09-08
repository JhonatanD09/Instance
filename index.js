const express = require('express')
const app = express()
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'test'
});

connection.connect(function(err) {
    // en caso de error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

app.get('/' , function(req, res){
    res.send("HOLA")
})

app.listen(4500, () => {
    console.log(`Example app listening at http://localhost:4500`)
})
