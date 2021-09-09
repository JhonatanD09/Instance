const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2021SlFj09',
    database : 'test'
});
connection.connect(function(err) {

    // en caso de error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});


app.post("/query", function(req,res){
    executeQuery(req.body.consulta)
})

function executeQuery(data){
    $query = data;
    console.log($query)
    /connection.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            return;
        }    
        console.log("Consulta ejecutada con éxito:", rows);
        axios.post("http://localhost:2000/responseQuery", {'respuesta':rows});
    });
    
}


app.listen(4500, () => {
    console.log(`Example app listening at http://localhost:4500`)
})
