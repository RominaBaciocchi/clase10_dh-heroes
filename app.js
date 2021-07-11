const { response } = require('express');
const express = require ('express');
const app = express ();
const port = 3030;
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(3030,()=>{
    console.log('La app esta funcionando en el puerto http://localhost:' + port);
});
app.get('/', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/index.html')) 
});
app.get('/home', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/index.html')) 
});
app.get('/babbage', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/babbage.html'))
});
app.get('/berners-lee', function(req,res){
    res.sendFile(path.resolve(__dirname, 'views/berners-lee.html'))
});
app.get('/clarkee', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/clarkee.html'))
});
app.get('/hamilton', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/hamilton.html'))
});
app.get('/hopper', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/hopper.html'))
});
app.get('/lovelace', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/lovelace.html'))
});
app.get('/turing', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/turing.html'))
});                        
app.use(express.static('public'));
