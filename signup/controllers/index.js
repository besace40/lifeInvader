function signup(req, res) {
    res.render('signup');
}

function signupProcess(req, res) {
    let utilities = require('../../user/utilities/index');
    utilities.addUser(req, res);
    //res.redirect('signin');
}

module.exports.signup = signup;
module.exports.signupProcess = signupProcess;
