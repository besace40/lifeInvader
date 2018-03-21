let router = require('express').Router();
let controller = require('../controllers');


router.post('/signin',(req,res)=>{controller.signinProcess(req,res);});

router.get('/signin',(req,res)=>{controller.signin(req,res);});

module.exports=router;
