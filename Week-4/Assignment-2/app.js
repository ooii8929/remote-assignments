const express = require('express');
const fetch = require('node-fetch');
//npm install node-fetch@2.0
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

var api_url = 'https://appworks-school.github.io/Remote-Aassigiment-Data/products';



async function getData(){
  await fetch(api_url)
    .then((response) => {
      // 這裡會得到一個 ReadableStream 的物件
      console.log('response');
      // 可以透過 blob(), json(), text() 轉成可用的資訊
      response.json();
    }).then((jsonData) => {
      
      console.log('jsonData');
      //console.log(jsonData);
      return jsonData;
    }).catch((err) => {
      console.log('錯誤:', err);
    });
};
const tem = getData();

/*
let binData = null;

fetch(api_url)
    .then(result => result.json())
    .then(data => {
        binData = data;
        console.log("binData", binData);
    });
console.log("binData", binData);

 */
/*
function cros(){
	
	fetch('https://appworks-school.github.io/Remote-Aassigiment-Data/products').then(function(response) {
  // 直接轉成JSON格式
  return response.json()
}).then(function(obj) {
  // `obj`會是一個JavaScript物件
  console.log(obj)
}).catch(function(err) {
// Error :(
})

}
*/

console.log(tem);


console.log(typeof tem);


//console.log(tem[1]);





app.get('/',(req,res)=>{
	res.render('index',{variables : text});
});

app.get('/callback',(req,res)=>{
	res.render('index');
});



app.listen(3000, () => {
	console.log(`Example app listening on port 3000 `)
  })