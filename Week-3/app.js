const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
const port = 3000;
app.use(express.static('public'));


app.set('view engine', 'pug');
//tell Express which template engine to use
//By defaule, Express look in a folder called Views in the root

const mainRoutes = require('./routes');
//because we have index.js, so we don't need to use ./routes/index\
const dataRoutes = require('./routes/data');

app.use(mainRoutes);
//make middleware
app.use('/data',dataRoutes);
//app.use('/trackName',dataRoutes);


app.get('/myName', (req, res) => {
    res.render('myName',{username:req.cookies.username});
    //or res.locals.user='123';
})


app.get('/trackName', (req, res) => {
    const {name} = req.query;
    res.cookie('username',name);
    res.redirect('myName');
})


app.post('/logout',(req,res)=>{
    //console.dir(req.body); [Object: null prototype] { username: 'eeee' }
    res.clearCookie('username');
    res.redirect('myName');
})

app.use((req,res,next) =>{
    const err=  new Error('Not Found');
    err.status=404;
    next(err);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})