const express = require('express');
const router = express.Router();


//change '/data' to '/'
router.get('/', (req, res) => {
    const {number} = req.query;

    const parsed = Number.parseInt(number);
    console.log(Number.isInteger(parsed));
    if(Object.keys(req.query).length === 0){
        res.send('Lack of Parameter');
    }else if(!Number.isInteger(parsed)){
        res.send('Wrong Parameter');
    }else{
        //let temNum = 0;     
        let temAns  = (parsed*(parsed+1))/2;
        /*
        for(let i = 1 ; i <= parsed;i++){
            temNum += i;    
        }
        */
        res.send(`${temAns}`);
    }
})



module.exports = router;