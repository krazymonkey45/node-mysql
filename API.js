const api= express();
const mysql      = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'student',
    database : 'blog'
  });

api.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE blog'
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created ...');
    });

});

api.get("/createposttable", (req,res) =>{
    CREATE TABLE blog (
        column1 datatype,
        column2 datatype,
        column3 datatype,
       ....
    );
    
    let sql = 'CREATE TABLE posts(ID int NOT NULL AUTO_INCREMENT'
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created ...');
    });
    res.send("created talbe...")
})
const mysql      = require('mysql');




api.listen(5000);
console.log("server is live on prot 5000");
