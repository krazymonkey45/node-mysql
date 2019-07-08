const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
 host     : 'localhost',
 user     : 'admin',
 password : 'student',
 database : 'blog',
});

db.connect(function(err){
   if (err) throw err
   console.log("mysql is connected");
});

const api = express();

// creating db
api.get('/createdb', (req, res) => {
   let sql = 'CREATE DATABASE blog'
   db.query(sql, (err, result) => {
       if (err) throw err;
       console.log(result);
       res.send('database was created ... ');
   });
});

// create a table  
api.get('/createposttable', (req, res) => {
   let sql = 'CREATE TABLE posts(ID int NOT NULL AUTO_INCREMENT, title varchar(255), body varchar(255), PRIMARY KEY (ID) )'
   db.query(sql, (err, result) => {
       if (err) throw err;
       console.log(result);
       res.send('table was created ... ');
   });
});

api.get("/addpost", (req,res) =>{
    let post = {title: "My first Post", body: "Hello today was a good day in indian river county"}
    let sql = 'INSERT INTO posts SET ? ';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('first post added ... ');
    });
});

api.get("/addpost2", (req,res) =>{
    let post = {title: "My second Post", body: "Hello again"}
    let sql = 'INSERT INTO posts SET ? '
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('first post added ... ');
    });
});

api.get("/getposts", (req,res) =>{
    let sql = ' '
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('first post added ... ');
    });
});


api.get("/getposts/:id", (req,res) =>{
    let sql = 'SELECT * FROM posts WHERE ID =' + req.params.id;
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
//delet a post
api.get("/getposts/:id", (req,res) =>{
    let sql = 'SELECT * FROM posts WHERE ID =' + req.params.id;
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
api.listen(5000, function(err){
   if (err)
       console.log(err)
   console.log('Server is live on port 5000')
});