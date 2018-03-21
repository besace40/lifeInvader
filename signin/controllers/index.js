function signin(req,res){
  res.render('signin');
}
function signinProcess(req, res) {
    let utilities = require('../utilities/index.js');
    utilities.connect(req, res);

}

module.exports.signin=signin;
module.exports.signinProcess=signinProcess;

/* Afficher données client */
