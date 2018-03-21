let router = require('express').Router();
let controller = require('../controllers');


router.post('/profile',(req,res)=>{controller.profile(req,res);});

router.get('/profile',(req,res)=>{controller.profile(req,res);});

module.exports=router;
