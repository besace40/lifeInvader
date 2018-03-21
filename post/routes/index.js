let router = require('express').Router();
let controller = require('../controllers');


router.post('/post',(req,res)=>{controller.postProcess(req,res);});

router.get('/post',(req,res)=>{controller.post(req,res);});

module.exports=router;
