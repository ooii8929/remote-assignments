const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res) => {
    const {name} = req.query;
    res.cookie('username',req.query);
    res.send(`${name}`);
    res.redirect('/myName');
})

module.exports = router;