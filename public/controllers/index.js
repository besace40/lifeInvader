function homepage(req,res){res.render('homepage');
}
module.exports.homepage=homepage;

function team(req,res){res.render('Team');
}
module.exports.team=team;


function contact(req,res){res.render('Contact');
}
module.exports.contact=contact;


function about(req,res){res.render('About');
}
module.exports.about=about;

function signup(req,res){res.render('Signup');
}
module.exports.signup=signup;
