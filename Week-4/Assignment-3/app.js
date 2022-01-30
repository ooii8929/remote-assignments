const express =  require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('public'));


app.set('view engine', 'pug');


app.get('/',(req,res)=>{
    res.render('index');
})





const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Aass8929',
    database : 'nodemysql'

  });

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connected...');
});



//create database
app.get('/creatdb',(req,res)=>{
    let sql = 'CREATE DATABASE assignment'
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    })

});

//create table
app.get('/createpoststable',(req,res)=>{
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    })

});

var status  = {
    fail:'the user not found',
};



//insert post 1
app.post('/signup',(req, res)=>{
    console.log(req.body);
    const {useremail} = req.body;
    const {userpassword} = req.body;
    console.log(useremail);

    //duplicate email
    let sql = `SELECT * FROM user WHERE email = '${useremail}'`;

    let query = db.query(sql,(err,result)=>{
        console.log(result);
        if(err){throw err};
        //user not found
        if(!result.length) { 
            let post = {email:useremail,password:userpassword};
            let sql = 'INSERT INTO user SET ?';
            let query = db.query(sql,post,(err,result)=>{
                if(err) throw err;
                console.log(result);
                
            });
            res.cookie('useremail',useremail);
            res.redirect('member');
        }else{
            res.render('index',{test2:'user exist'});
            res.end();
        };
    });

    
});

app.get('/member',(req,res)=>{
    res.render('member',{useremail:req.cookies.useremail});
});

app.post('/logout',(req,res)=>{
    //console.dir(req.body); [Object: null prototype] { username: 'eeee' }
    res.clearCookie('useremail');
    res.redirect('/');
})


//select posts
app.get('/getposts',(req, res)=>{
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql,(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Post fetch');
    });
});

//user login
app.post('/login',(req, res)=>{
    const {useremail} = req.body;
    let sql = `SELECT * FROM user WHERE email = '${useremail}'`;
    
    let query = db.query(sql,(err,result)=>{
        console.log(result);
        if(err){throw err};
        //user not found
        if(!result.length) { 
            res.render('index',{test2:'user not found'});
         
        }else{
            res.cookie('useremail',useremail);
            res.redirect('member');
        };
    });
});


app.listen('3000',()=>{

    console.log('Server started on port 3000')
})