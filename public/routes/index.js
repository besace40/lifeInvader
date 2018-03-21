let router = require('express').Router();
let controller = require('../controllers');


router.get('/',(req,res)=>{controller.homepage(req,res);});

router.get('/Team',(req,res)=>{controller.team(req,res);});

router.get('/Contact',(req,res)=>{controller.contact(req,res);});

router.get('/About',(req,res)=>{controller.about(req,res);});

router.get('/Signup',(req,res)=>{controller.signup(req,res);});


module.exports=router;
