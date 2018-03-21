function connect(req,res){
    //On cherche les users avec le username qui est rentré
    let User=require('../../user/models/user');
    let username = req.body.username;
    let password=req.body.password;

    User.findOne({'local.username':username},function(err,user){
      if (err) throw err;
      if (user){
        if(user.comparePassword(password)){
          req.session.user = user;
          res.redirect('/profile');
        } else
            res.send("mauvais mot de passe");
      }
      else
        res.send("L'utilisateur n'existe pas");
    }
);

  }

  //req.session.ser=user;

  module.exports.connect = connect;
