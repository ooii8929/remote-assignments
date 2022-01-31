const express = require('express');
//require function is the easiest way to include modules that exist in separate files
const router = express.Router();
//a router is kind of like a mini app in Express

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  




module.exports = router;
//The module is a variable that represents the current module, and exports is an object that will be exposed as a module.