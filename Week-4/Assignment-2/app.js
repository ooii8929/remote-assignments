const express = require('express');

const app = express();


app.set('view engine', 'pug');

app.get('/',(req,res)=>{
	res.render('index',{variables : ['Pixel 3','Chromecast']});
});

app.get('/callback',(req,res)=>{
	res.render('index');
});



app.listen(3000, () => {
	console.log(`Example app listening on port 3000 `)
  })