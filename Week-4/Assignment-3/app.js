const express =  require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');


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


/*
//create database
app.get('/creatdb',(req,res)=>{
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    })

});
*/

//create table
app.get('/createpoststable',(req,res)=>{
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    })

});



function checkMailFormat(email){
    
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    //if fit mail format then ture ; if not fit then false


    return emailRegexp.test(email);

};

//insert post 1
app.post('/signup',(req, res)=>{
    
    const {useremail} = req.body;
   
    if(!checkMailFormat(useremail)){
        console.log('mail format wrong');
        res.render('index',{test2:'mail format wrong'});
    }else{
        const {userpassword} = req.body;
        console.log(useremail);

        //duplicate email
        let sql = `SELECT * FROM user WHERE email = '${useremail}'`;

        let query = db.query(sql,(err,result)=>{
            console.log(result);
            if(err){throw err};
            //user not found
            if(!result.length) { 
                //turn to hash password by bcrypt
                const passwordHash = bcrypt.hashSync(userpassword, 10);
                let post = {email:useremail,password:passwordHash};
                let sql = 'INSERT INTO user SET ?';
                let query = db.query(sql,post,(err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    
                });
                res.cookie('useremail',useremail);
                res.cookie('member_status','login');
                res.redirect('member');
            }else{
                res.render('index',{test2:'user exist'});
                res.end();
            };
        });
    };
    

    
});

app.get('/member',(req,res)=>{

    
    if(req.cookies.useremail){
        const useremail = req.cookies.useremail;
        let sqlEmail = `SELECT email FROM user WHERE email = '${useremail}'`;
        let query = db.query(sqlEmail, (err,result)=>{
            const userExistEmail = result[0].email;
            console.log(userExistEmail);
            if(userExistEmail ===useremail&&req.cookies.member_status==='login'){
                res.render('member',{useremail:useremail});
            }else{
                res.redirect('index',{test2:'You need login first'});
            }
        });
    }else{
        res.redirect('/');
    };
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
    if(!checkMailFormat(useremail)){
        console.log('mail format wrong');
        res.render('index',{test2:'mail format wrong'});
        return;
    };
    const {userpassword} = req.body;
    let sqlPassword = `SELECT password FROM user WHERE email = '${useremail}'`;
  
    let query = db.query(sqlPassword,(err,result)=>{
        //hash password
        const userPassword = result[0].password;
        const sqlExistPassword = bcrypt.compareSync(userpassword, userPassword);

        //user not found
        if(err) { 
            res.render('index',{test2:'user not found'});
            throw err;
        }else if(sqlExistPassword){
            res.cookie('useremail',useremail);
            res.cookie('member_status','login');
            res.redirect('member');
        }else{
            res.render('index',{test2:'password wrong'});
        };
    });
});


/* test bcrypt hash password
const passwordHash = bcrypt.hashSync('Pa$$w0rd', 10);
const verified = bcrypt.compareSync('Pa$$w0rd', passwordHash);
console.log(passwordHash);
console.log(verified);
*/

app.listen('3000',()=>{

    console.log('Server started on port 3000')
})